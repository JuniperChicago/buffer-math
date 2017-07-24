/**
 * Returns the value of the bit at position bitNumber.
 * @param {Buffer} buffer - Buffer.
 * @param {number} bitNumber - Bit number.
 * @returns {number} If bit is set return its value otherwise 0.
 */
module.exports = (buffer, bitNumber) => buffer[bitNumber >> 3] & 1 << (bitNumber % 8)
