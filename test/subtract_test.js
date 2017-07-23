const expect = require('chai').expect
const Buffer = require('buffer').Buffer
const subtract = require('../lib/subtract')

const ZERO = Buffer.from([0])
const ONE = Buffer.from([1])
const BIG_NUM_1 = Buffer.from([0x8F, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x15])
const BIG_NUM_2 = Buffer.from([0x7A, 0xCB, 0x5C, 0x38, 0xAC, 0x6D, 0xAE, 0xAA])

it('subtract', function () {
  expect(subtract(ZERO, ZERO)).to.deep.equal(ZERO)
  expect(subtract(ONE, ZERO)).to.deep.equal(ONE)
  expect(subtract(BIG_NUM_1, BIG_NUM_2)).to.deep.equal(Buffer.from([0x15, 0x34, 0xA3, 0xC7, 0x53, 0x92, 0x51, 0x55, 0x15]))
  expect(subtract(BIG_NUM_1, BIG_NUM_1)).to.deep.equal(ZERO)
})
