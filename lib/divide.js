const divideAndRemainder = require('./divideAndRemainder')

/**
 * Division.
 * @param {Buffer} buffer - Dividend.
 * @param {Buffer} divisor - Divisor.
 * @param {Buffer} [quotient] - Result quotient buffer.
 * @returns {Buffer} Quotient.
 */
module.exports = (buffer, divisor, quotient) => divideAndRemainder(buffer, divisor, quotient).quotient
