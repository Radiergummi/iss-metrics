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


/**
 * Convert telemetry time into a Date object
 *
 * Timestamps from the ISS telemetry feed come as the fractional number of hours
 * since the start of the year, so we need to convert that into a regular date
 * object to perform date math on it.
 *
 * @param timestamp Timestamp as read from the telemetry feeed
 */
export function aosTimestampToDate(timestamp: number) {
    // Calculate the day of the year
    const dayOfYear = Math.floor(timestamp / 24);

    // Calculate the remaining hours after removing complete days
    const remainingHours = timestamp % 24;

    // Extract the hour part
    const hours = Math.floor(remainingHours) + 1;

    // Calculate the remaining minutes after removing complete hours
    const remainingMinutes = (remainingHours - hours + 1) * 60;

    // Extract the minute part
    const minutes = Math.floor(remainingMinutes);

    // Calculate the remaining seconds after removing complete minutes
    const remainingSeconds = (remainingMinutes - minutes) * 60;

    // Extract the second part
    const seconds = Math.floor(remainingSeconds);

    // Create a new Date object
    const currentDate = new Date();

    // Set the date components
    currentDate.setFullYear(currentDate.getFullYear(), 0, 1);
    currentDate.setMonth(0);
    currentDate.setDate(dayOfYear);

    // Set the time components
    currentDate.setHours(hours);
    currentDate.setMinutes(minutes);
    currentDate.setSeconds(seconds);

    return currentDate;
}

/**
 * Convert a Date object into a telemetry time float
 *
 * This reverses the timestampToDate function and converts a regular Date into
 * a telemetry feed-style time float.
 *
 * @param date Date to convert
 */
export function dateToAosTimestamp(date: Date) {
    // Calculate the timestamp for the start of the year
    const timestamp = new Date().setFullYear(new Date().getFullYear(), 0, 1);

    // Calculate the day of the year for the given date
    const dayOfYear = Math.ceil((date.getTime()) / 86_400_000) - Math.floor(timestamp / 86_400_000);

    // Extract the UTC hours component of the date
    const hoursUTC = date.getUTCHours();

    // Extract the minutes component of the date
    const minutes = date.getMinutes();

    // Extract the seconds component of the date
    const seconds = date.getSeconds();

    // Calculate the local timestamp using day of year, hours, minutes, and seconds
    return dayOfYear * 24 + hoursUTC + minutes / 60 + seconds / 3600;
}
