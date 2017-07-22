/**
 * Checks if the buffer is odd.
 * @param {Buffer} buffer - Buffer.
 * @returns {boolean} True if odd, otherwise false.
 */
module.exports = (buffer) => (buffer[0] & 0x1) === 1
