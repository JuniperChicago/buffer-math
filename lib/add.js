const Buffer = require('buffer').Buffer
const trimAfter = require('./trimAfter')

/**
 * Addition.
 * @param {Buffer} buffer - First summand.
 * @param {Buffer} summand - Second summand.
 * @param {Buffer} [result=Buffer.alloc(Math.max(buffer.length, summand.length) + 1)] - Result buffer.
 * @returns {Buffer} Sum.
 */
module.exports = (buffer, summand, result = Buffer.alloc(Math.max(buffer.length, summand.length) + 1)) => {
  let bigger = buffer
  let smaller = summand
  if (bigger.compare(smaller) < 0) {
    bigger = summand
    smaller = buffer
  }

  let carry = 0
  for (let i = 0; i < bigger.length; i++) {
    const currentResult = bigger[i] + (smaller[i] || 0) + carry
    carry = currentResult >> 8
    result[i] = currentResult & 0xFF
  }
  result[result.length - 1] = carry
  return trimAfter(result)
}
