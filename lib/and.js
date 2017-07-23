/**
 * Bitwise AND operation.
 * @param {Buffer} buffer - Buffer.
 * @param {Buffer} operand - Operand.
 * @param {Buffer} [result=Buffer.allocUnsafe(Math.min(buffer.length, operand.length))] - Result buffer.
 * @returns {Buffer} Result.
 */
module.exports = (buffer, operand, result = Buffer.allocUnsafe(Math.min(buffer.length, operand.length))) => {
  for (let i = 0; i < result.length; i++) result[i] = buffer[i] & operand[i]
  return result
}
