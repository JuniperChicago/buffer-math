const divideAndRemainder = require('./divideAndRemainder')

/**
 * Module.
 * @param {Buffer} buffer - Dividend.
 * @param {Buffer} divisor - Divisor.
 * @param {Buffer} [remainder] - Result remainder buffer.
 * @returns {Buffer} Remainder.
 */
module.exports = (buffer, divisor, remainder) => divideAndRemainder(buffer, divisor, remainder).remainder
