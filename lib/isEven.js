/**
 * Checks if the buffer is even.
 * @param {Buffer} buffer - Buffer.
 * @returns {boolean} True if even, otherwise false.
 */
module.exports = (buffer) => (buffer[0] & 0x1) === 0
