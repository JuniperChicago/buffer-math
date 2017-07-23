const expect = require('chai').expect
const Buffer = require('buffer').Buffer
const shiftRight = require('../lib/shiftRight')

const ZERO = Buffer.from([0])
const ONE = Buffer.from([1])
const BIG_NUM_1 = Buffer.from([0x7F, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x15])
const BIG_NUM_2 = Buffer.from([0x7A, 0xCB, 0x5C, 0x38, 0xAC, 0x6D, 0xAE, 0xAA])

it('shiftRight', function () {
  expect(shiftRight(ZERO, 5)).to.deep.equal(Buffer.from([0x00]))
  expect(shiftRight(ONE, 3)).to.deep.equal(Buffer.from([0x00]))
  expect(shiftRight(BIG_NUM_1, 0)).to.deep.equal(BIG_NUM_1)
  expect(shiftRight(BIG_NUM_1, 5)).to.deep.equal(Buffer.from([0xFB, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xAF]))
  expect(shiftRight(BIG_NUM_1, 11)).to.deep.equal(Buffer.from([0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xBF, 0x02]))
  expect(shiftRight(BIG_NUM_2, 31)).to.deep.equal(Buffer.from([0x58, 0xDB, 0x5C, 0x55, 0x01]))
  expect(shiftRight(BIG_NUM_1, -11)).to.deep.equal(Buffer.from([0x00, 0xF8, 0xFB, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xAF]))
})
