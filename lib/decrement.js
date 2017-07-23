/**
 * Decrements the buffer by 1. On underflow it throws an error.
 * @param {Buffer} buffer - Buffer.
 * @returns {Buffer} Decremented buffer.
 */
module.exports = (buffer) => {
  let i
  for (i = 0; buffer[i] === 0x00 && i < buffer.length; i++) buffer[i] = 0xFF

  if (i < buffer.length) buffer[i] -= 1
  else throw new RangeError('Cannot decrement zero buffer.')
  return buffer
}
