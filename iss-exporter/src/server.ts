import express, {type RequestHandler} from "express";
import expressMetricsMiddleware from "express-prom-bundle";
import {info} from "./logging.js";
import type {Registry} from "prom-client";
import type {Config} from "./config.js";
import {telemetrySignalStatus} from "./subscription.js";

/**
 * Create a new web server to expose the Prometheus metrics endpoint.
 *
 * Create an Express instance with endpoints for metric collection and status
 * checking pre-configured. If the application is configured to gather metrics
 * on the exporter web server, we also attach the express metrics middleware
 * from the `express-prom-bundle` module.
 *
 * @param config Application configuration
 * @param registry Prometheus registry to serve at the metrics endpoint
 */
export function createServer(config: Config, registry: Registry) {
    const server = express();

    if (config.webServerMetrics) {
        server.use(expressMetricsMiddleware({
            includeMethod: true,
            includePath: true,
            includeStatusCode: true,
            includeUp: true,
            autoregister: false,
            promRegistry: registry,
            httpDurationMetricName: 'http_request_duration_seconds'
        }));
    }

    server.get(config.metricsEndpoint, metricsEndpoint(registry));
    server.get(config.statusEndpoint, statusEndpoint());

    server.on(
        'listening',
        () => info(`Server listening to ${config.listenPort}, metrics exposed on ${config.metricsEndpoint}`)
    );

    return server;
}

/**
 * Creates a request handler for the metrics endpoint.
 *
 * The metrics endpoint returns the current values for all metrics in the
 * registry, and will be regularly scraped by Prometheus.
 *
 * @param registry
 */
function metricsEndpoint(registry: Registry): RequestHandler {
    return async function metricsEndpoints(_req, res) {
        try {
            const content = await registry.metrics();

            res.set('Content-Type', registry.contentType);
            res.end(content);
        } catch (error) {
            res.status(500).end(error);
        }
    }
}

/**
 * Creates a request handler for the status endpoint.
 *
 * The status endpoint returns the status of the signal subscription, and is
 * used by the Docker health check to determine if the application is up.
 */
function statusEndpoint(): RequestHandler {
    return async function statusEndpoint(_req, res) {
        const signalStatus = (await telemetrySignalStatus.get()).values.at(-1)?.value ?? 0;

        res.json({signalStatus});
    }
}
