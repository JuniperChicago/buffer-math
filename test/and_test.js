const expect = require('chai').expect
const Buffer = require('buffer').Buffer
const and = require('../lib/and')

const ZERO = Buffer.from([0])
const ONE = Buffer.from([1])
const BIG_NUM_1 = Buffer.from([0x7F, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x15])
const BIG_NUM_2 = Buffer.from([0x7A, 0xCB, 0x5C, 0x38, 0xAC, 0x6D, 0xAE, 0xAA])

it('and', function () {
  expect(and(ZERO, ZERO)).to.deep.equal(ZERO)
  expect(and(ZERO, ONE)).to.deep.equal(ZERO)
  expect(and(ONE, ONE)).to.deep.equal(ONE)
  expect(and(BIG_NUM_1, BIG_NUM_2)).to.deep.equal(Buffer.from([0x7A, 0xCB, 0x5C, 0x38, 0xAC, 0x6D, 0xAE, 0xAA]))
})
