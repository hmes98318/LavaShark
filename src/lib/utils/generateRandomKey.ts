/**
 * Generates a random key of the specified length.
 * 
 * @param {number} length - The length of the random key to generate.
 * @returns {string} - A randomly generated key containing alphanumeric characters.
*/
const generateRandomKey = (length: number): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
};

export { generateRandomKey };