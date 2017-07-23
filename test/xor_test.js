const expect = require('chai').expect
const Buffer = require('buffer').Buffer
const xor = require('../lib/xor')

const ZERO = Buffer.from([0])
const ONE = Buffer.from([1])
const BIG_NUM_1 = Buffer.from([0x7F, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x15])
const BIG_NUM_2 = Buffer.from([0x7A, 0xCB, 0x5C, 0x38, 0xAC, 0x6D, 0xAE, 0xAA])

it('xor', function () {
  expect(xor(ZERO, ZERO)).to.deep.equal(ZERO)
  expect(xor(ZERO, ONE)).to.deep.equal(ONE)
  expect(xor(ONE, ONE)).to.deep.equal(ZERO)
  expect(xor(BIG_NUM_1, BIG_NUM_2)).to.deep.equal(Buffer.from([0x05, 0x34, 0xA3, 0xC7, 0x53, 0x92, 0x51, 0x55, 0x15]))
})
