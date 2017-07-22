/**
 * Calculates the position of the most significant byte.
 * @param {Buffer} buffer - Buffer.
 * @returns {number} Position of the most significant byte.
 */
module.exports = (buffer) => {
  let i
  for (i = buffer.length - 1; i > 0; i--) {
    if (buffer[i]) return i
  }
  return 0
}
