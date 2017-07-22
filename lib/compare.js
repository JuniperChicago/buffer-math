/**
 * Compares the buffers.
 * @param {Buffer} buffer - Buffer.
 * @param {Buffer} target - Buffer to compare to.
 * @returns {number} 0 if buffer is equal to, 1 if buffer is bigger than, -1 if buffer is smaller than target.
 */
module.exports = (buffer, target) => {
  let length = Math.max(buffer.length, target.length)
  while (length--) {
    const x = buffer[length] || 0
    const y = target[length] || 0
    if (x !== y) return x > y ? 1 : -1
  }
  return 0
}
