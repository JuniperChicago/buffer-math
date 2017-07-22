const msBPos = require('./msBPos')
/**
 * Trims zeros at the end of a buffers.
 * @param {Buffer} buffer - Buffer.
 * @returns {Buffer} Trimmed buffer.
 */
module.exports = (buffer) => buffer.slice(0, msBPos(buffer) + 1)
