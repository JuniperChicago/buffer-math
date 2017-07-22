/**
 * Trims zeros at the start of a buffer.
 * @param {Buffer} buffer - Buffer.
 * @returns {Buffer} Trimmed buffer.
 */
module.exports = (buffer) => {
  for (let i = 0; i < buffer.length - 1; i++) {
    if (buffer[i]) return buffer.slice(i)
  }
  return buffer.slice(0)
}
