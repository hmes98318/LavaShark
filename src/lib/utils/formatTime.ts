/**
 * Converts the given number of milliseconds to a formatted time string.
 * The minimum output format is mm:ss, and additional components such as hh:mm:ss or day:hh:mm:ss will be added if necessary.
 *
 * @param {number} milliseconds - The number of milliseconds to be converted.
 * @returns {string} The formatted time string.
 */
const formatTime = (milliseconds: number): string => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const formattedSeconds = seconds % 60;
    const formattedMinutes = minutes % 60;
    const formattedHours = hours % 24;

    let timeString = '';

    if (days > 0) {
        timeString += `${days}d `;
    }
    if (formattedHours > 0) {
        timeString += `${formattedHours.toString().padStart(2, '0')}:`;
    }

    timeString += `${formattedMinutes.toString().padStart(2, '0')}:${formattedSeconds.toString().padStart(2, '0')}`;

    return timeString;
}

export { formatTime };