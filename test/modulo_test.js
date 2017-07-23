const expect = require('chai').expect
const Buffer = require('buffer').Buffer
const modulo = require('../lib/modulo')

const ZERO = Buffer.from([0])
const ONE = Buffer.from([1])
const BIG_NUM_1 = Buffer.from([0x8F, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x15])
const BIG_NUM_2 = Buffer.from([0x7A, 0xCB, 0x5C, 0x38, 0xAC, 0x6D, 0xAE, 0xAA])

it('modulo', function () {
  expect(modulo(ZERO, ONE)).to.deep.equal(ZERO)
  expect(modulo(ONE, ONE)).to.deep.equal(ZERO)
  expect(modulo(BIG_NUM_1, Buffer.from([2]))).to.deep.equal(ONE)
  expect(modulo(BIG_NUM_1, BIG_NUM_2)).to.deep.equal(Buffer.from([0x4F, 0x90, 0x66, 0xF4, 0x78, 0x4A, 0x32, 0xAA]))
  expect(modulo(BIG_NUM_1, Buffer.from([0x8E, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x15]))).to.deep.equal(ONE)
})
