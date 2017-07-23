const expect = require('chai').expect
const Buffer = require('buffer').Buffer
const divide = require('../lib/divide')

const ZERO = Buffer.from([0])
const ONE = Buffer.from([1])
const BIG_NUM_1 = Buffer.from([0x8F, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x15])
const BIG_NUM_2 = Buffer.from([0x7A, 0xCB, 0x5C, 0x38, 0xAC, 0x6D, 0xAE, 0xAA])

it('divide', function () {
  expect(divide(ZERO, ONE)).to.deep.equal(ZERO)
  expect(divide(ONE, ONE)).to.deep.equal(ONE)
  expect(divide(BIG_NUM_1, Buffer.from([2]))).to.deep.equal(Buffer.from([0xC7, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x0A]))
  expect(divide(BIG_NUM_1, BIG_NUM_2)).to.deep.equal(Buffer.from([0x20]))
  expect(divide(BIG_NUM_1, Buffer.from([0x8E, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x15]))).to.deep.equal(ONE)
})
