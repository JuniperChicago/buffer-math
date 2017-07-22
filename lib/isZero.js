/**
 * Checks if the buffer is zero.
 * @param {Buffer} buffer - Buffer.
 * @returns {boolean} True if zero, otherwise false.
 */
module.exports = (buffer) => {
  let length = buffer.length
  while (length--) if (buffer[length]) return false
  return true
}
