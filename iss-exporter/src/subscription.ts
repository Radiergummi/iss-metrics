import {debug, error, info, warn} from "./logging.js";
import type {Config} from "./config.js";
import {Gauge, type Registry} from "prom-client";
import {LightstreamerClient, Subscription} from "lightstreamer-client-node";
import {aosTimestampToDate} from "./utilities.js";

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
    /**
     * Telemetry Signal status metric
     *
     * The signal status metric is a gauge that indicates the current status of the
     * telemetry feed. It will be set to `0` when the signal is lost, `1` when the
     * signal is acquired, and `2` when the signal is stale.
     */
    const clientConnectionStatus = createConnectionStatusMetric(config, registry);

    /**
     * Client Connection status metric
     *
     * The connection status metric refers to the connection between the Exporter
     * instance and the Lightstreamer server itself.
     */
    const telemetrySignalStatus = createTelemetryStatusMetric(config, registry);
    const telemetrySignalLatency = createTelemetryLatencyMetric(config, registry);
    let connected = false;

    const client = new LightstreamerClient(
        config.subscriptionEndpoint,
        config.subscriptionAdapter
    );

    // Disable the slowing algorithm. As we limit the frequency anyhow, we are
    // optimistic that we can keep up with the data inflow.
    client.connectionOptions.setSlowingEnabled(false);

    // Attach a status change listener to the connection itself: This allows us
    // to get notified of a connection loss, for example. That makes for
    // valuable debugging information.
    client.addListener({
        onStatusChange(status: ConnectionStatus) {
            updateConnectionStatus(clientConnectionStatus, status)
        },
    });

    // Subscribe to all metrics listed in the telemetry.json file: Effectively,
    // this filters the data stream from the server for data we know how
    // to handle.
    const subscription = new Subscription(
        "MERGE",
        Array.from(metrics.keys()),
        ["TimeStamp", "Value"]
    );

    // Subscribe to the time feed separately: We use the time metric to check
    // the signal delay.
    const timeSubscription = new Subscription(
        'MERGE',
        config.timeSignalName,
        ['TimeStamp', 'Value', 'Status.Class', 'Status.Indicator']
    );

    // The update frequency is given as a millisecond interval for consistency
    // reasons, hence we convert it to the amount of updates per second, as
    // required by the Subscription instance.
    const frequency = 1_000 / config.updateFrequency;
    subscription.setRequestedMaxFrequency(frequency)
    timeSubscription.setRequestedMaxFrequency(frequency);

    const handler = createUpdateHandler(metrics);
    subscription.addListener({
        onItemUpdate(update) {

            // This function will be invoked on any metrics update. Here, we'll
            // resolve them by telemetry data point name, and set the gauge
            // to the updated value.
            handler(
                update.getItemName(),
                Number(update.getValue('Value'))
            );
        },
        onSubscriptionError(code: number, message: string) {
            error("Encountered subscription error", {code, message});
        },
    });

    timeSubscription.addListener({
        onItemUpdate(update) {
            const aosTimestamp = parseFloat(update.getValue('TimeStamp'));
            const offset = calculateTimeOffset(aosTimestamp);
            telemetrySignalLatency.set(offset);

            if (update.getValue('Status.Class') === '24') {

                // If the offset is greater than 15 seconds (an arbitrarily
                // chosen value), we mark the signal as stale.
                if (offset > 15) {

                    // connected -> stale (but still connected)
                    telemetrySignalStatus.set(2);
                    connected = true;

                    debug("Telemetry signal is stale", {offset});
                } else {
                    // not connected -> connected (reconnect)
                    if (!connected) {
                        info("Telemetry signal acquired");
                    }

                    // connected -> connected (no change)
                    telemetrySignalStatus.set(1);
                    connected = true;
                }
            } else {

                // connected -> not connected (connection loss)
                telemetrySignalStatus.set(0);
                connected = false;

                warn("Telemetry signal lost");
            }
        },
        onSubscriptionError(code: number, message: string) {
            error("Encountered subscription error", {code, message});
        },
    });

    // Add the subscriptions and connect to the feed: At this point, we'll start
    // to receive data.
    client.subscribe(subscription);
    client.subscribe(timeSubscription);
    client.connect();
}

function createUpdateHandler(metrics: Map<string, Gauge>) {
    return function handleUpdate(name: string, value: number) {
        const metric = metrics.get(name);

        if (!metric) {
            warn(`Metric not found: "${name}"`);

            return;
        }

        metric.set(value);
    }
}

/**
 * Calculates the offset between the time as reported by the space station and
 * our local time.
 *
 * As the signal will need to travel from literal space (how cool is that!) to
 * our server, it may take some time, usually 2 to 4 seconds. This function
 calculates the amount of seconds that travel took.
 *
 * @param timestamp Parsed station timestamp
 */
function calculateTimeOffset(timestamp: number) {
    const localTimestamp = new Date().getTime();
    const stationTimestamp = aosTimestampToDate(timestamp).getTime()

    return (localTimestamp - stationTimestamp) / 1_000;
}

/**
 * Creates a metric for the telemetry signal status.
 *
 * @param config Application configuration
 * @param registry Prometheus metrics registry
 */
function createTelemetryStatusMetric(config: Config, registry: Registry) {
    return new Gauge({
        name: `${config.metricsPrefix}telemetry_signal_status`,
        help: 'ISS telemetry feed signal status (0: Signal lost, ' +
            '1: Signal acquired, 2: Signal stale)',
        registers: [registry]
    });
}

/**
 * Creates a metric for the telemetry signal delay (time offset between the time
 * included in the event and the local time of receipt).
 *
 * @param config Application configuration
 * @param registry Prometheus metrics registry
 */
function createTelemetryLatencyMetric(config: Config, registry: Registry) {
    return new Gauge({
        name: `${config.metricsPrefix}telemetry_signal_latency`,
        help: 'ISS telemetry feed signal latency in seconds',
        registers: [registry],
    })
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
 * Updates the connection status metric with the new status.
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
