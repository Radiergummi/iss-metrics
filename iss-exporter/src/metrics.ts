import specs from "../../telemetry.json" assert {type: "json"};
import {Gauge, type Registry} from "prom-client";
import type {Config} from "./config.js";
import {info} from "./logging.js";

/**
 * Register all metrics we want to expose.
 *
 * This will parse the `telemetry.json` file in the project root, create gauge
 * metrics for each entry in the file, and then return a `Map` dictionary of
 * named metrics.
 *
 * @param config Application configuration
 * @param registry Prometheus metric registry to register metrics on
 */
export function registerMetrics(config: Config, registry: Registry) {
    const createMetric = register(config, registry);

    // Here, we reduce the telemetry feed specification into a dictionary of
    // Prometheus metric instances keyed by their original name, so we can
    // retrieve individual telemetry metrics later on.
    const metrics = specs.reduce<Map<string, Gauge>>((metrics, {
        category,
        description,
        name,
        labels
    }) => {
        metrics.set(name, createMetric(
            name,
            description,
            category,
            labels
        ));

        return metrics;
    }, new Map());

    info(`Configured ${metrics.size} metrics`);

    return metrics;
}

/**
 * Factory for a helper function to create new gauge metrics bound to the
 * registry and configuration.
 *
 * @param config Application configuration
 * @param registry Prometheus metric registry to register metrics on
 */
function register(config: Config, registry: Registry) {
    const registers = [registry];

    return function register(
        metric: string,
        description: string,
        category: string | null,
        labels: Record<string, string | undefined> | undefined
    ) {
        const name = resolveMetricName(config, category, metric);
        const help = resolveHelpText(description, labels);

        return new Gauge({name, help, registers});
    }
}

/**
 * Resolve the name of a particular metric.
 *
 * The original telemetry feed uses some naming conventions that are not
 * compatible with Prometheus, so we need to transform them and add the
 * desired prefix.
 *
 * @param config Application configuration
 * @param category Name of the category to prepend
 * @param name Name of the metric
 */
function resolveMetricName(config: Config, category: string | null, name: string) {
    const safeCategory = category
        ? category.replace(/^[^a-zA-Z]+|[^a-zA-Z0-9]+/g, '_') + '_'
        : '';
    const safeName = name.replace(/_/g, '');
    const prefix = config.metricsPrefix + safeCategory;

    return `${prefix}_${safeName}`.toLowerCase();
}

/**
 * Resolve the help text for a particular metric.
 *
 * This will include the description from the telemetry feed, and a mapping of
 * labels if present. Those labels represent the meaning of all the values the
 * metric might take, so this makes it a lot easier to interpret the data at the
 * receiving end later on.
 *
 * @param description Metric description from the raw data
 * @param labels Telemetry value mapping labels
 */
function resolveHelpText(
    description: string,
    labels: Record<string, string | undefined> | undefined
) {
    if (!labels) {
        return description;
    }

    // This call chain turns a record like `{ key: "value", test: 1 }` into
    // a string like `key: value, test: 1`.
    const mapping =  Object
            .entries(labels)
            .map(([k, v]) => `${k}: ${v}`)
            .join(', ');

    return `${description} (Mapping: ${mapping})`;
}
