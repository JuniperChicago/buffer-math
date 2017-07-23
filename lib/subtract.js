const Buffer = require('buffer').Buffer
const compare = require('./compare')
const trimAfter = require('./trimAfter')

/**
 * Subtraction.
 * @param {Buffer} buffer - Minuend.
 * @param {Buffer} subtrahend - Subtrahend.
 * @param {Buffer} [result=Buffer.alloc(this.length)] - Result buffer.
 * @returns {Buffer} Difference.
 */
module.exports = (buffer, subtrahend, result = Buffer.alloc(buffer.length)) => {
  if (compare(buffer, subtrahend) < 0) throw new RangeError('buffer is smaller than subtrahend.')

  let borrow = 0
  for (let i = 0; i < buffer.length; i++) {
    let currentResult = buffer[i] - (subtrahend[i] || 0) - borrow
    if (currentResult < 0) {
      currentResult -= 256
      borrow = 1
    } else {
      borrow = 0
    }
    result[i] = currentResult
  }
  return trimAfter(result)
}
