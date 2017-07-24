/**
 * Checks if the buffer is one.
 * @param {Buffer} buffer - Buffer.
 * @returns {boolean} True if one, otherwise false.
 */
module.exports = (buffer) => {
  if (buffer[0] !== 1) return false
  for (let i = 1; i < buffer.length; i++) if (buffer[i]) return false
  return true
}
