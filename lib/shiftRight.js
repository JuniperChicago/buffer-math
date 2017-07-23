const trimAfter = require('./trimAfter')

/**
 * Shift right operation.
 * @param {Buffer} buffer - Buffer.
 * @param {number} number - Bits to shift.
 * @param {Buffer} [result=Buffer.alloc(this.length - (number >> 3))] - Result buffer.
 * @returns {Buffer} Result.
 */
module.exports = (buffer, number, result = Buffer.alloc(buffer.length - (number >> 3))) => {
  if (number < 0) return require('./shiftLeft')(buffer, -number, result)

  const bits = number & 7
  const bytes = number >> 3
  result = result || Buffer.alloc(buffer.length - bytes)

  let carry = 0
  for (let i = buffer.length, j = buffer.length - bytes; i >= 0; i--, j--) {
    const shifted = (buffer[i] << 8) >> bits
    result[j] = carry | ((shifted & 0xFF00) >> 8)
    carry = shifted & 0xFF
  }
  return trimAfter(result)
}
