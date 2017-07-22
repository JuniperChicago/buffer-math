const expect = require('chai').expect
const Buffer = require('buffer').Buffer
const bitLength = require('../lib/bitLength')

it('bitLength', function () {
  expect(bitLength(Buffer.from([0x00]))).to.equal(1)
  expect(bitLength(Buffer.from([0x05]))).to.equal(3)
  expect(bitLength(Buffer.from([0x05, 0x00]))).to.equal(3)
  expect(bitLength(Buffer.from([0x00, 0x05]))).to.equal(11)
  expect(bitLength(Buffer.from([0x7F, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x15]))).to.equal(69)
  expect(bitLength(Buffer.from([0x4A, 0xCB, 0x5C, 0x38, 0xAC, 0x6D, 0xAE, 0xAA]))).to.equal(64)
})