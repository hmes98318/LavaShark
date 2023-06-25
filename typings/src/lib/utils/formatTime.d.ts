/**
 * Converts the given number of milliseconds to a formatted time string.
 * The minimum output format is mm:ss, and additional components such as hh:mm:ss or day:hh:mm:ss will be added if necessary.
 *
 * @param {number} milliseconds - The number of milliseconds to be converted.
 * @returns {string} The formatted time string.
 */
declare const formatTime: (milliseconds: number) => string;
export { formatTime };
