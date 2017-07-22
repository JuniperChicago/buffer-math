const Buffer = require('buffer').Buffer

/**
 * Converts the value from big endian to little endian and back.
 * @param {Buffer} buffer - Buffer.
 * @returns {Buffer} New buffer in other endianness.
 */
module.exports = (buffer) => {
  const result = Buffer.allocUnsafe(buffer.length)
  for (let i = 0, j = buffer.length - 1; i <= j; i++, j--) {
    result[i] = buffer[j]
    result[j] = buffer[i]
  }
  return result
}
