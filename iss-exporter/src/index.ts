import process, {exit} from 'node:process';
import {collectDefaultMetrics, Registry} from 'prom-client';
import {configureLogging} from "./logging.js";
import {getConfig} from "./config.js";
import {setupPositionTracking} from "./setup-position-tracking.js";
import {registerMetrics} from "./metrics.js";
import {subscribe} from "./subscription.js";
import {createServer} from "./server.js";

// Load the configuration from the environment, and configure the logging system
// to use the configured log level.
const config = getConfig(process.env);
configureLogging(config);

// Create a new registry to hold all our metrics. We could use the default
// registry, but we want to have more control over the lifecycle of our metrics,
// so we create a new one.
const registry = new Registry();

// If enabled, we'll collect default metrics from the Node.js runtime.
// This includes things like memory usage, garbage collection, and event loop
// latency. These metrics are not part of the telemetry data we receive from
// Lightstreamer, but they can be useful for monitoring the health of the
// exporter application itself.
if (config.nodeMetrics) {
    collectDefaultMetrics({
        register: registry,
        prefix: config.nodeMetricsPrefix,
    });
}

// Register all metrics we want to expose. This will parse the telemetry.json
// file in the project root, and create gauge metrics for each entry in the
// file, then return them as a structured map.
const metrics = registerMetrics(config, registry);

// We'll try to regularly retrieve the current position of the ISS. This
// information is not part of the telemetry data we receive, so we need to fetch
// it from a different source.
setupPositionTracking(config, registry);

// Create a Lightstreamer subscription for all metrics we resolved from the
// specification file.
// This is really where the most interesting stuff happens; everything else is
// just garnish.
subscribe(metrics, config, registry);

// The web server exposes the Prometheus metrics endpoint.
const server = createServer(config, registry);

// After listening to the configured port, the application is running in a loop:
// From here on out, it responds to requests and updates the metrics in
// the background.
server.listen(config.listenPort);

// Handle SIGTERM and SIGINT to exit gracefully: This way, we can stop or
// restart the Docker container instantly.
process.on('SIGINT', () => exit(0));
process.on('SIGTERM', () => exit(0));
