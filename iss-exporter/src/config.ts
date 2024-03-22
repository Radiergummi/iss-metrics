import {env} from "node:process";

export type LogLevel = 'info' | 'warn' | 'error' | 'debug';
type Url = `http://${string}` | `https://${string}`;

export interface Config {
    listenPort: number;
    logLevel: LogLevel;
    metricsEndpoint: string;
    metricsPrefix: string;
    nodeMetrics: boolean;
    nodeMetricsPrefix: string;
    positionApiUrl: Url;
    positionUpdateFrequency: number;
    statusEndpoint: string;
    subscriptionAdapter: string;
    subscriptionEndpoint: Url;
    timeSignalName: string;
    updateFrequency: number;
    webServerMetrics: boolean;
    webServerMetricsPrefix: string;
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
        listenPort: Number(environment.LISTEN_PORT || 3_000),
        logLevel: environment.LOG_LEVEL || 'info',
        metricsEndpoint: environment.METRICS_ENDPOINT || '/metrics',
        metricsPrefix: (environment.METRICS_PREFIX || 'iss').replace(/_$/, '') + '_',
        nodeMetrics: environment.NODE_METRICS !== 'false',
        nodeMetricsPrefix: (environment.NODE_METRICS_PREFIX || 'node').replace(/_$/, '') + '_',
        positionApiUrl: environment.POSITION_API_URL || 'http://api.open-notify.org/iss-now.json',
        positionUpdateFrequency: Number(environment.POSITION_UPDATE_FREQUENCY || 2_000),
        statusEndpoint: environment.STATUS_ENDPOINT || '/status',
        subscriptionAdapter: environment.SUBSCRIPTION_ADAPTER || 'ISSLIVE',
        subscriptionEndpoint: environment.SUBSCRIPTION_ENDPOINT || 'https://push.lightstreamer.com',
        timeSignalName: environment.TIME_SIGNAL_NAME || 'TIME_000001',
        updateFrequency: Number(environment.UPDATE_FREQUENCY || 1_000),
        webServerMetrics: environment.WEB_SERVER_METRICS === 'true',
        webServerMetricsPrefix: (environment.WEB_SERVER_METRICS_PREFIX || 'express').replace(/_$/, '') + '_',
    };
}
