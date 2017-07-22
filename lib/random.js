const crypto = require('crypto')

/**
 * Generates a random buffer with the given bit length.
 * @param {number} bitLength - Bit length of the random number.
 * @returns {Buffer} Random buffer.
 */
module.exports = (bitLength) => {
  const randomBytes = crypto.randomBytes((bitLength >> 3) + 1)
  // Mask msb to fit bit length
  randomBytes[randomBytes.length - 1] &= (1 << (bitLength & 7)) - 1
  return randomBytes
}
