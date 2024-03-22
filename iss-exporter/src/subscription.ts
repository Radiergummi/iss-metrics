import {debug, info, warn} from "./logging.js";
import type {Config} from "./config.js";
import {Gauge, type Registry} from "prom-client";
import {LightstreamerClient, Subscription} from "lightstreamer-client-node";

/**
 * Subscribe to the telemetry feed and update the metrics accordingly.
 *
 * @param metrics Metrics dictionary
 * @param config Application configuration
 * @param registry Prometheus metrics registry
 */
export function subscribe(
    metrics: Map<string, Gauge>,
    config: Config,
    registry: Registry
) {
    clientConnectionStatus = createConnectionStatusMetric(config, registry);
    telemetrySignalStatus = createTelemetryStatusMetric(config, registry);
    let connected = false;

    const client = new LightstreamerClient(
        config.subscriptionEndpoint,
        config.subscriptionAdapter
    );
    client.connectionOptions.setSlowingEnabled(false);

    client.addListener({
        onStatusChange(status: ConnectionStatus) {
            updateConnectionStatus(clientConnectionStatus, status)
        },
    });

    const subscription = new Subscription(
        "MERGE",
        Array.from(metrics.keys()),
        ["TimeStamp", "Value"]
    );

    // Subscribe to the time feed
    const timeSubscription = new Subscription(
        'MERGE',
        'TIME_000001',
        ['TimeStamp', 'Value', 'Status.Class', 'Status.Indicator']
    );

    // The update frequency is given as a millisecond interval for consistency
    // reasons, hence we convert it to the amount of updates per second, as
    // required by the Subscription instance.
    const frequency = 1_000 / config.updateFrequency;
    subscription.setRequestedMaxFrequency(frequency)
    timeSubscription.setRequestedMaxFrequency(frequency);

    client.subscribe(subscription);
    client.subscribe(timeSubscription);
    client.connect();

    subscription.addListener({

        // This function will be invoked on any metrics update. Here, we'll
        // resolve them by telemetry data point name, and set the gauge value.
        onItemUpdate(update) {
            const metric = metrics.get(update.getItemName());

            if (!metric) {
                warn(`Metric not found: ${update.getItemName()}`);

                return;
            }

            metric.set(Number(update.getValue('Value')));
        }
    });

    timeSubscription.addListener({
        onItemUpdate(update) {

            // Calculate the offset between the time as reported by the space
            // station and our local time. As the signal will need to travel
            // from literal space (how cool is that!) to our server, it may take
            // some time, usually 2 to 4 seconds. If the offset is greater than
            // 15 seconds (an arbitrarily chosen value), we mark the signal as
            // stale and update the connection metric.
            const aosTimestamp = parseFloat(update.getValue('TimeStamp'));
            const offset = new Date().getTime() - timestampToDate(aosTimestamp).getTime() / 1_000;

            if (update.getValue('Status.Class') === '24') {
                if (offset > 15) {

                    // connected -> stale (but still connected)
                    telemetrySignalStatus.set(2);
                    connected = true;

                    debug("Stale Signal!");
                } else {
                    // not connected -> connected (reconnect)
                    if (!connected) {
                        info("Signal acquired");
                    }

                    // connected -> connected (no change)
                    telemetrySignalStatus.set(1);
                    connected = true;
                }
            } else {

                // connected -> not connected (connection loss)
                telemetrySignalStatus.set(0);
                connected = false;

                warn("Signal lost");
            }
        }
    });
}

/**
 * Telemetry Signal status metric
 *
 * The signal status metric is a gauge that indicates the current status of the
 * telemetry feed. It will be set to `0` when the signal is lost, `1` when the
 * signal is acquired, and `2` when the signal is stale.
 */
export let telemetrySignalStatus: Gauge;

/**
 * Client Connection status metric
 *
 * The connection status metric refers to the connection between the Exporter
 * instance and the Lightstreamer server itself.
 */
export let clientConnectionStatus: Gauge;

/**
 * Creates a metric for the telemetry signal status.
 *
 * @param config Application configuration
 * @param registry Prometheus metrics registry
 */
function createTelemetryStatusMetric(config: Config, registry: Registry) {
    return new Gauge({
        name: `${config.metricsPrefix}telemetry_signal_status`,
        help: 'ISS telemetry feed signal status (0: Signal lost, '+
            '1: Signal acquired, 2: Signal stale)',
        registers: [registry]
    });
}

/**
 * Creates a metric for the client connection status.
 *
 * @param config Application configuration
 * @param registry Prometheus metrics registry
 */
function createConnectionStatusMetric(config: Config, registry: Registry) {
    return new Gauge({
        name: `${config.metricsPrefix}client_connection_status`,
        help: 'Lightstreamer client connection status (0: disconnected, 1: ' +
            'connecting, 2: streaming, 3: polling, 4: stalled, 5: reconnecting',
        registers: [registry]
    });
}

/**
 Updates the connection status metric with the new status
 *
 * @param metric Metric instance to update
 * @param status Connection status from Lightstreamer
 */
function updateConnectionStatus(metric: Gauge, status: ConnectionStatus) {
    switch (status) {
        case "DISCONNECTED":
            metric.set(0);
            break;
        case "CONNECTING":
            metric.set(1);
            break;
        case "CONNECTED:HTTP-STREAMING":
        case "CONNECTED:WS-STREAMING":
            metric.set(2);
            break;
        case "CONNECTED:HTTP-POLLING":
        case "CONNECTED:WS-POLLING":
            metric.set(3);
            break;
        case "STALLED":
            metric.set(4);
            break;
        case "DISCONNECTED:WILL-RETRY":
        case "DISCONNECTED:TRYING-RECOVERY":
            metric.set(5);
    }
}

type ConnectionStatus =

// The client has started a connection attempt and is waiting for a
// Server answer.
    | 'CONNECTING'

    // The client received a first response from the server and is now
    // evaluating if a streaming connection is fully functional.
    | 'CONNECTED:STREAM-SENSING'

    // A streaming connection over WebSocket has been established.
    | 'CONNECTED:WS-STREAMING'

    // A streaming connection over HTTP has been established.
    | 'CONNECTED:HTTP-STREAMING'

    // A polling connection over WebSocket has been started. Note that, unlike
    // polling over HTTP, in this case only one connection is actually opened.
    | 'CONNECTED:WS-POLLING'

    // A polling connection over HTTP has been started.
    | 'CONNECTED:HTTP-POLLING'

    // A streaming session has been silent for a while, the status will
    // eventually return to its previous CONNECTED:*-STREAMING status or will
    // switch to DISCONNECTED:WILL-RETRY or DISCONNECTED:TRYING-RECOVERY.
    | 'STALLED'

    // A connection or connection attempt has been closed; a new attempt will be
    // performed (possibly after a timeout).
    | 'DISCONNECTED:WILL-RETRY'

    // A connection has been closed and the client has started a connection
    // attempt and is waiting for a Server answer; if successful, the underlying
    // session will be kept.
    | 'DISCONNECTED:TRYING-RECOVERY'

    // A connection or connection attempt has been closed. The client will not
    // connect anymore until a new LightstreamerClient#connect call is issued.
    | 'DISCONNECTED'
    ;

/**
 * Convert telemetry time into a Date object
 *
 * Timestamps from the ISS telemetry feed come as the fractional number of hours
 * since the start of the year, so we need to convert that into a regular date
 * object to perform date math on it.
 *
 * @param timestamp Timestamp as read from the telemetry feeed
 */
function timestampToDate(timestamp: number) {
    // Calculate the day of the year
    const dayOfYear = Math.floor(timestamp / 24);

    // Calculate the remaining hours after removing complete days
    const remainingHours = timestamp % 24;

    // Extract the hour part
    const hours = Math.floor(remainingHours) + 1;

    // Calculate the remaining minutes after removing complete hours
    const remainingMinutes = (remainingHours - hours + 1) * 60;

    // Extract the minute part
    const minutes = Math.floor(remainingMinutes);

    // Calculate the remaining seconds after removing complete minutes
    const remainingSeconds = (remainingMinutes - minutes) * 60;

    // Extract the second part
    const seconds = Math.floor(remainingSeconds);

    // Create a new Date object
    const currentDate = new Date();

    // Set the date components
    currentDate.setFullYear(currentDate.getFullYear(), 0, 1);
    currentDate.setMonth(0);
    currentDate.setDate(dayOfYear);

    // Set the time components
    currentDate.setHours(hours);
    currentDate.setMinutes(minutes);
    currentDate.setSeconds(seconds);

    return currentDate;
}

/**
 * Convert a Date object into a telemetry time float
 *
 * This reverses the timestampToDate function and converts a regular Date into
 * a telemetry feed-style time float.
 *
 * @param date Date to convert
 */
function dateToTimestamp(date: Date) {
    // Calculate the timestamp for the start of the year
    const timestamp = new Date().setFullYear(new Date().getFullYear(), 0, 1);

    // Calculate the day of the year for the given date
    const dayOfYear = Math.ceil((date.getTime()) / 86_400_000) - Math.floor(timestamp / 86_400_000);

    // Extract the UTC hours component of the date
    const hoursUTC = date.getUTCHours();

    // Extract the minutes component of the date
    const minutes = date.getMinutes();

    // Extract the seconds component of the date
    const seconds = date.getSeconds();

    // Calculate the local timestamp using day of year, hours, minutes, and seconds
    return dayOfYear * 24 + hoursUTC + minutes / 60 + seconds / 3600;
}
