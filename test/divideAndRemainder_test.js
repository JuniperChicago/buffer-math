const expect = require('chai').expect
const Buffer = require('buffer').Buffer
const divideAndRemainder = require('../lib/divideAndRemainder')

const ZERO = Buffer.from([0])
const ONE = Buffer.from([1])
const BIG_NUM_1 = Buffer.from([0x8F, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x15])
const BIG_NUM_2 = Buffer.from([0x7A, 0xCB, 0x5C, 0x38, 0xAC, 0x6D, 0xAE, 0xAA])

it('divideAndRemainder', function () {
  expect(divideAndRemainder(ZERO, ONE)).to.deep.equal({quotient: ZERO, remainder: ZERO})
  expect(divideAndRemainder(ONE, ONE)).to.deep.equal({quotient: ONE, remainder: ZERO})
  expect(divideAndRemainder(BIG_NUM_1, Buffer.from([2]))).to.deep.equal({
    quotient: Buffer.from([0xC7, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x0A]),
    remainder: ONE
  })
  expect(divideAndRemainder(BIG_NUM_1, BIG_NUM_2)).to.deep.equal({
    quotient: Buffer.from([0x20]),
    remainder: Buffer.from([0x4F, 0x90, 0x66, 0xF4, 0x78, 0x4A, 0x32, 0xAA])
  })
  expect(divideAndRemainder(BIG_NUM_1, Buffer.from([0x8E, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x15]))).to.deep.equal({
    quotient: ONE,
    remainder: ONE
  })
})
