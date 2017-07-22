const msBPos = require('./msBPos')

/**
 * Calculates the bit length of the buffer.
 * @param {Buffer} buffer - Buffer.
 * @returns {number} Bit length of the buffer.
 */
module.exports = (buffer) => {
  const i = msBPos(buffer)
  return (i << 3) + buffer[i].toString(2).length
}
