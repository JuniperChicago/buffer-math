/**
 * Increments the buffer by 1. On overflow it returns a new buffer.
 * @param {Buffer} buffer - Buffer.
 * @returns {Buffer} Incremented buffer.
 */
module.exports = (buffer) => {
  let i
  for (i = 0; buffer[i] >= 0xFF; i++) buffer[i] = 0

  if (i < buffer.length) {
    buffer[i] += 1
  } else {
    buffer = Buffer.alloc(i + 1)
    buffer[i] = 1
  }
  return buffer
}
