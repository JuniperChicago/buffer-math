/**
 * Converts the value from big endian to little endian and back.
 * @param {Buffer} buffer - Buffer.
 * @returns {Buffer} Same buffer in other endianness.
 */
module.exports = (buffer) => {
  for (let i = 0, j = buffer.length - 1; i <= j; i++, j--) {
    const tmp = buffer[i]
    buffer[i] = buffer[j]
    buffer[j] = tmp
  }
  return buffer
}
