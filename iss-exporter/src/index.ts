import {LightstreamerClient, Subscription} from 'lightstreamer-client-node';
import {collectDefaultMetrics, Gauge, Registry} from 'prom-client';
import express from 'express';
import expressMetricsMiddleware from 'express-prom-bundle';
import specs from '../../telemetry.json';

// region Prometheus Setup
const registry = new Registry();
collectDefaultMetrics({register: registry});

const metrics = specs
    .map(({category, description, name, labels}) => {
        const safeCategory = category ? category.replace('/', '_') : '';
        const metricName = ('iss_' + (safeCategory ? `${safeCategory}_` : '') + name).toLowerCase();
        const mapping = labels
            ? Object
                .entries(labels)
                .map(([k, v]) => `${k}: ${v}`)
                .join(', ')
            : '';

        return [name, new Gauge({
            name: metricName,
            help: description + (labels ? ` (Mapping: ${mapping})` : ''),
            registers: [registry]
        })];
    })
    .reduce((metrics, [key, metric]) => {
        metrics.set(key, metric);

        return metrics;
    }, new Map());

console.info(`Configured ${metrics.size} metrics`);
// endregion

// region Position Tracking
const positionApiUrl = process.env.POSITION_API_URL || 'https://api.open-notify.org/iss-now.json';
const positionLatitude = new Gauge({
    name: 'iss_position_latitude',
    help: 'ISS current latitude',
    registers: [registry]
});
const positionLongitude = new Gauge({
    name: 'iss_position_longitude',
    help: 'ISS current longitude',
    registers: [registry]
});

setInterval(async () => {
    try {
        const response = await fetch(positionApiUrl);
        const data = await response.json();

        if (!response.ok || !data.iss_position || data.message !== 'success') {
            throw new Error('Invalid response');
        }

        const {latitude, longitude} = data.iss_position || {};
        positionLatitude.set(Number(latitude));
        positionLongitude.set(Number(longitude));
    } catch (error) {
        console.error('Could not fetch ISS position data', error);
    }
}, 2_000);
// endregion

// region Time Tracking
let connected = false;
let aosTimestamp = 0.00;
let timeOffset = 0.00;

const date = new Date();
const timestamp = new Date().setFullYear(new Date().getFullYear(), 0, 1);
const dayOfYear = Math.ceil((new Date().getTime()) / 86_400_000) - Math.floor(timestamp / 86_400_000);
const localTimestamp = dayOfYear * 24 + date.getUTCHours() + date.getMinutes() / 60 + date.getSeconds() / 3_600;
// endregion

// region Telemetry Subscription
const subscriptionEndpoint = process.env.SUBSCRIPTION_ENDPOINT || 'https://push.lightstreamer.com';
const subscriptionAdapter = process.env.SUBSCRIPTION_ADAPTER || 'ISSLIVE';
const client = new LightstreamerClient(subscriptionEndpoint, subscriptionAdapter);
client.connectionOptions.setSlowingEnabled(false);

const clientConnectionStatus = new Gauge({
    name: 'iss_client_connection_status',
    help: 'Lightstreamer client connection status',
    registers: [registry]
});
client.addListener({
    onStatusChange(status) {
        clientConnectionStatus.set(Number(status));
    }
});

const sub = new Subscription(
    "MERGE",
    specs.map(metric => metric.name),
    ["TimeStamp", "Value"]
);

// Subscribe to the time feed
const timeSub = new Subscription('MERGE', 'TIME_000001', [
    'TimeStamp',
    'Value',
    'Status.Class',
    'Status.Indicator',
]);

client.subscribe(sub);
client.subscribe(timeSub);
client.connect();

sub.addListener({
    onItemUpdate(update) {
        const metric = metrics.get(update.getItemName());

        if (!metric) {
            console.warn(`Metric not found: ${update.getItemName()}`);

            return;
        }

        metric.set(Number(update.getValue('Value')));
    }
});


const telemetrySignalStatus = new Gauge({
    name: 'iss_telemetry_signal_status',
    help: 'ISS telemetry feed signal status',
    registers: [registry]
});

timeSub.addListener({
    onItemUpdate(update) {
        aosTimestamp = parseFloat(update.getValue('TimeStamp'));
        timeOffset = localTimestamp - aosTimestamp;

        if (update.getValue('Status.Class') === '24') {
            if (timeOffset > 0.001_536_805_425_530_47) {
                console.debug("Stale Signal!");

                telemetrySignalStatus.set(2);
                connected = true;
            } else {
                if (!connected) {
                    console.debug("Signal Acquired!");
                }

                telemetrySignalStatus.set(1);
                connected = true;
            }
        } else {
            console.warn("Signal Lost!");

            telemetrySignalStatus.set(0);
            connected = false;
        }
    }
});
// endregion

// region Web Server
const server = express();
const serverMetrics = process.env.WEB_SERVER_METRICS || 'false';

if (serverMetrics === 'true') {
    server.use(expressMetricsMiddleware({
        includeMethod: true,
        includePath: true,
        includeStatusCode: true,
        includeUp: true,
        autoregister: false,
    }));
}

const metricsEndpoint = process.env.METRICS_ENDPOINT || '/metrics';
const statusEndpoint = process.env.STATUS_ENDPOINT || '/status';

server.get(metricsEndpoint, async (_req, res) => {
    try {
        const content = await registry.metrics();

        res.set('Content-Type', registry.contentType);
        res.end(content);
    } catch (error) {
        res.status(500).end(error);
    }
});

server.get(statusEndpoint, (_req, res) => {
    res.json({
        signalStatus: telemetrySignalStatus.get(),
        aosTimestamp,
        timeOffset,
    });
});

const port = process.env.LISTEN_PORT || 3_000;
console.info(`Server listening to ${port}, metrics exposed on ${metricsEndpoint} endpoint`);

server.listen(port);
// endregion
