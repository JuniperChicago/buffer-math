const Buffer = require('buffer').Buffer
const compare = require('./compare')
const isZero = require('./isZero')
const trimAfter = require('./trimAfter')
const trimBefore = require('./trimBefore')
const subtract = require('./subtract')

/**
 * Division.
 * @param {Buffer} buffer - Dividend.
 * @param {Buffer} divisor - Divisor.
 * @param {Buffer} [quotient] - Result quotient buffer.
 * @param {Buffer} [remainder] - Result remainder buffer.
 * @returns {{quotient: Buffer, remainder: Buffer}} Quotient and remainder.
 */
module.exports = (buffer, divisor, quotient, remainder) => {
  if (isZero(divisor)) throw new RangeError('Divisor must not be zero.')
  if (isZero(buffer)) {
    if (quotient) quotient.fill(0)
    else quotient = Buffer.alloc(1)
    if (remainder) remainder.fill(0)
    else remainder = Buffer.alloc(1)
    return {quotient, remainder}
  }

  const cmp = compare(buffer, divisor)
  if (cmp < 0) {
    remainder = remainder || Buffer.allocUnsafe(buffer.length)
    buffer.copy(remainder)
    if (quotient) quotient.fill(0)
    else quotient = Buffer.alloc(1)
    return {quotient, remainder}
  }
  if (cmp === 0) {
    if (quotient) quotient.fill(0)
    else quotient = Buffer.allocUnsafe(1)
    quotient[0] = 1
    if (remainder) remainder.fill(0)
    else remainder = Buffer.alloc(1)
    return {quotient, remainder}
  }
  if (divisor.length === 1) return _divideOneWord(buffer, divisor[0], quotient, remainder)

  // Long division
  quotient = quotient || Buffer.alloc(buffer.length)
  remainder = remainder || Buffer.alloc(buffer.length)
  buffer.copy(remainder)
  for (let i = buffer.length - divisor.length, j = buffer.length, k = quotient.length - 1; i >= 0; i--) {
    let current = remainder.slice(i, j)
    if (compare(current, divisor) >= 0) {
      let counter = 0
      do {
        current = subtract(current, divisor, current)
        counter++
      } while (compare(current, divisor) >= 0)
      j = remainder.length
      quotient[k--] = counter
    }
  }
  return {quotient: trimBefore(quotient), remainder: trimAfter(remainder)}
}

/**
 * Division by one word.
 * @param {Buffer} buffer - Dividend.
 * @param {number} divisor - One word divisor.
 * @param {Buffer} [quotient=Buffer.alloc(buffer.length)] - Result quotient buffer.
 * @param {Buffer} [remainder=Buffer.alloc(1)] - Result remainder buffer.
 * @returns {{quotient: Buffer, remainder: Buffer}} Quotient and remainder.
 * @private
 */
const _divideOneWord = (buffer, divisor, quotient = Buffer.alloc(buffer.length), remainder = Buffer.alloc(1)) => {
  for (let i = buffer.length - 1; i >= 0; i--) {
    const dividendEstimate = (remainder[0] << 8) + buffer[i]
    quotient[i] = (dividendEstimate / divisor) & 0xFF
    remainder[0] = (dividendEstimate - quotient[i] * divisor) & 0xFF
  }
  return {quotient: trimBefore(quotient), remainder: trimAfter(remainder)}
}
