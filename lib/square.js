const multiply = require('./multiply')

/**
 * Calculates the square.
 * @param {Buffer} buffer - Base.
 * @param {Buffer} [result=Buffer.alloc(buffer.length * 2)] - Result buffer.
 * @returns {Buffer} Power.
 */
module.exports = (buffer, result = Buffer.alloc(buffer.length * 2)) => multiply(buffer, buffer, result)
