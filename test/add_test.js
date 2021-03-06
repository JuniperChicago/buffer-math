const expect = require('chai').expect
const Buffer = require('buffer').Buffer
const add = require('../lib/add')

const ZERO = Buffer.from([0])
const ONE = Buffer.from([1])
const BIG_NUM_1 = Buffer.from([0x8F, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x15])
const BIG_NUM_2 = Buffer.from([0x7A, 0xCB, 0x5C, 0x38, 0xAC, 0x6D, 0xAE, 0xAA])

it('add', function () {
  expect(add(ZERO, ZERO)).to.deep.equal(ZERO)
  expect(add(ZERO, ONE)).to.deep.equal(ONE)
  expect(add(BIG_NUM_1, BIG_NUM_2)).to.deep.equal(Buffer.from([0x09, 0xCB, 0x5C, 0x38, 0xAC, 0x6D, 0xAE, 0xAA, 0x16]))
  expect(add(BIG_NUM_1, BIG_NUM_1)).to.deep.equal(Buffer.from([0x1E, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x2B]))
  expect(add(BIG_NUM_2, BIG_NUM_1)).to.deep.equal(Buffer.from([0x09, 0xCB, 0x5C, 0x38, 0xAC, 0x6D, 0xAE, 0xAA, 0x16]))
})
