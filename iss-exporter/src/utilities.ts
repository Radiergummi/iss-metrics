import {error as logError} from "./logging.js";

type Task = (signal?: AbortSignal) => unknown;
type ErrorHandler = (error: Error) => unknown;

/**
 * Schedule a task to run at a regular interval.
 *
 * @param task
 * @param timeout
 * @param onError
 * @param signal
 */
export function schedule(
    task: Task,
    timeout: number,
    onError: ErrorHandler = error => logError(
        `Error in scheduled task: ${error}`,
        {error}
    ),
    signal?: AbortSignal
) {
    setTimeout(function scheduledTask() {
        try {
            task(signal);
        } catch (error) {
            onError(error as Error);
        } finally {
            if (!signal?.aborted) {
                schedule(task, timeout, onError, signal);
            }
        }
    }, timeout);
}
