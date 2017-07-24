const bitLength = require('./bitLength')
const getBit = require('./getBit')
const isOne = require('./isOne')
const multiply = require('./multiply')
const modulo = require('./modulo')

/**
 * Calculates (buffer^exponent) mod modulus.
 * @param {Buffer} buffer - Base.
 * @param {Buffer} exponent - Exponent.
 * @param {Buffer} modulus - Modulus.
 * @param {Buffer} [result=Buffer.alloc(modulus.length)] - Result buffer.
 * @returns {Buffer} Result.
 */
module.exports = (buffer, exponent, modulus, result = Buffer.alloc(modulus.length)) => {
  if (isOne(modulus)) return Buffer.alloc(1)

  result[0] = 1
  buffer = modulo(buffer, modulus)
  for (let i = 0; i < bitLength(exponent); i++) {
    if (getBit(exponent, i)) {
      result = modulo(multiply(result, buffer), modulus, result)
    }
    // TODO Use square once it's finished
    buffer = modulo(multiply(buffer, buffer), modulus)
  }
  return result
}
