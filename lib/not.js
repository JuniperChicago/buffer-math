/**
 * Bitwise NOT operation.
 * @param {Buffer} buffer - Buffer.
 * @param {Buffer} [result=Buffer.allocUnsafe(this.length)] - Result buffer.
 * @returns {Buffer} Result.
 */
module.exports = (buffer, result = Buffer.allocUnsafe(buffer.length)) => {
  for (let i = 0; i < result.length; i++) result[i] = ~buffer[i]
  return result
}
