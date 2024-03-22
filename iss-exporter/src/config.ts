import {env} from "node:process";

export type LogLevel = 'info' | 'warn' | 'error' | 'debug';
type Url = `http://${string}` | `https://${string}`;

export interface Config {
    logLevel: LogLevel;
    updateFrequency: number;
    metricsPrefix: string;
    nodeMetricsPrefix: string;
    positionApiUrl: Url;
    positionUpdateFrequency: number;
    subscriptionEndpoint: Url;
    subscriptionAdapter: string;
    webServerMetrics: boolean;
    webServerMetricsPrefix: string;
    nodeMetrics: boolean;
    metricsEndpoint: string;
    statusEndpoint: string;
    listenPort: number;
}

/**
 * Resolves the normalized runtime configuration.
 *
 * This function reads the given environment variables and returns a normalized configuration object.
 *
 * @param environment
 */
export function getConfig(environment: typeof env): Config {

    // noinspection HttpUrlsUsage
    return {
        logLevel: environment.LOG_LEVEL || 'info',
        updateFrequency: Number(environment.UPDATE_FREQUENCY || 1_000),
        metricsPrefix: (environment.METRICS_PREFIX || 'iss').replace(/_$/, '') + '_',
        positionApiUrl: environment.POSITION_API_URL || 'http://api.open-notify.org/iss-now.json',
        positionUpdateFrequency: Number(environment.POSITION_UPDATE_FREQUENCY || 2_000),
        subscriptionEndpoint: environment.SUBSCRIPTION_ENDPOINT || 'https://push.lightstreamer.com',
        subscriptionAdapter: environment.SUBSCRIPTION_ADAPTER || 'ISSLIVE',
        webServerMetrics: environment.WEB_SERVER_METRICS === 'true',
        webServerMetricsPrefix: (environment.WEB_SERVER_METRICS_PREFIX || 'express').replace(/_$/, '') + '_',
        nodeMetrics: environment.NODE_METRICS !== 'false',
        nodeMetricsPrefix: (environment.NODE_METRICS_PREFIX || 'node').replace(/_$/, '') + '_',
        metricsEndpoint: environment.METRICS_ENDPOINT || '/metrics',
        statusEndpoint: environment.STATUS_ENDPOINT || '/status',
        listenPort: Number(environment.LISTEN_PORT || 3_000),
    };
}
