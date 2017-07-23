const trimAfter = require('./trimAfter')

/**
 * Shift left operation.
 * @param {Buffer} buffer - Buffer.
 * @param {number} number - Bits to shift.
 * @param {Buffer} [result=Buffer.alloc(buffer.length + (number >> 3) + 1)] - Result buffer.
 * @returns {Buffer} Result.
 */
module.exports = (buffer, number, result = Buffer.alloc(buffer.length + (number >> 3) + 1)) => {
  if (number < 0) return require('./shiftRight')(buffer, -number, result)

  const bits = number & 7
  const bytes = number >> 3

  let carry = 0
  for (let i = 0, j = bytes; i < buffer.length; i++, j++) {
    const shifted = buffer[i] << bits
    result[j] = carry | shifted
    carry = (shifted & 0xFF00) >> 8
  }
  result[result.length - 1] = carry
  return trimAfter(result)
}
