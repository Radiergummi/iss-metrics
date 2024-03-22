type Url = `http://${string}` | `https://${string}`;
type NumericString = `${number}` | number;

declare global {
    import type {LogLevel} from './logging.js';

    namespace NodeJS {
        // noinspection JSUnusedGlobalSymbols -- false positive
        interface ProcessEnv {
            LISTEN_PORT: NumericString;
            LOG_LEVEL: Level;
            METRICS_ENDPOINT: string;
            METRICS_PREFIX: string;
            NODE_METRICS: 'true' | 'false';
            NODE_METRICS_PREFIX: string;
            POSITION_API_URL: Url;
            POSITION_UPDATE_FREQUENCY: NumericString;
            STATUS_ENDPOINT: string;
            SUBSCRIPTION_ADAPTER: string;
            SUBSCRIPTION_ENDPOINT: Url;
            TIME_SIGNAL_NAME: string;
            UPDATE_FREQUENCY: NumericString;
            WEB_SERVER_METRICS: 'true' | 'false';
            WEB_SERVER_METRICS_PREFIX: string;
        }
    }
}

export {}
