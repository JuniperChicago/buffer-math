const Buffer = require('buffer').Buffer
const isZero = require('./isZero')
const trimAfter = require('./trimAfter')

/**
 * Multiplication.
 * @param {Buffer} buffer - Multiplicand.
 * @param {Buffer} multiplier - Multiplier.
 * @param {Buffer} [result=Buffer.alloc(this.length + bigInteger.length)] - Result buffer.
 * @returns {Buffer} Product.
 */
module.exports = (buffer, multiplier, result = Buffer.alloc(buffer.length + multiplier.length)) => {
  if (isZero(buffer) || isZero(multiplier)) return trimAfter(result.fill(0))

  for (let i = 0; i < buffer.length; i++) {
    let carry = 0
    for (let j = 0; j < multiplier.length; j++) {
      const currentResult = (buffer[i] * multiplier[j]) + result[i + j] + carry
      carry = currentResult >> 8
      result[i + j] = currentResult & 0xFF
    }
    result[i + multiplier.length] = carry
  }
  return trimAfter(result)
}
