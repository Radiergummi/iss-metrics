type Url = `http://${string}` | `https://${string}`;
type NumericString = `${number}` | number;

declare global {
    import type {LogLevel} from './logging.js';

    namespace NodeJS {
        // noinspection JSUnusedGlobalSymbols -- false positive
        interface ProcessEnv {
            LOG_LEVEL: Level;
            UPDATE_FREQUENCY: NumericString;
            METRICS_PREFIX: string;
            POSITION_API_URL: Url;
            POSITION_UPDATE_FREQUENCY: NumericString;
            SUBSCRIPTION_ENDPOINT: Url;
            SUBSCRIPTION_ADAPTER: string;
            WEB_SERVER_METRICS: 'true' | 'false';
            WEB_SERVER_METRICS_PREFIX: string;
            NODE_METRICS: 'true' | 'false';
            NODE_METRICS_PREFIX: string;
            METRICS_ENDPOINT: string;
            STATUS_ENDPOINT: string;
            LISTEN_PORT: NumericString;
        }
    }
}

export {}
