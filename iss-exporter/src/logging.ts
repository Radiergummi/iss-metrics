import {stderr} from 'node:process';
import type {Config, LogLevel} from "./config.js";

let levelThreshold = 0;

export function configureLogging(config: Config) {
    levelThreshold = levelIndex(config.logLevel);
}

export function info(message: string, attributes: Record<string, unknown> = {}) {
    log('info', message, attributes);
}

export function warn(message: string, attributes: Record<string, unknown> = {}) {
    log('warn', message, attributes);
}

export function error(message: string | Error, attributes: Record<string, unknown> = {}) {
    log('error', message.toString(), attributes);
}

export function debug(message: string, attributes: Record<string, unknown> = {}) {
    log('debug', message, attributes);
}

export function log(level: LogLevel, message: string, attributes: Record<string, unknown> = {}) {
    if (levelIndex(level) < levelThreshold) {
        return;
    }

    stderr.write(serialize(level, message, attributes) + '\n');
}

function levelIndex(level: LogLevel): number {
    return ['debug', 'info', 'warn', 'error'].indexOf(level);
}

function serialize(level: LogLevel, message: string, attributes: Record<string, unknown>) {
    return JSON.stringify({
        level,
        msg: message,
        ts: new Date().toISOString(),
        ...attributes,
    });
}
