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
  if (buffer.length < summand.length) {
    const tmp = buffer
    buffer = summand
    summand = tmp
  }

  let carry = 0
  for (let i = 0; i < buffer.length; i++) {
    const currentResult = buffer[i] + (summand[i] || 0) + carry
    carry = currentResult >> 8
    result[i] = currentResult
  }
  result[result.length - 1] = carry
  return trimAfter(result)
}
