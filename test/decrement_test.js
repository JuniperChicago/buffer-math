const expect = require('chai').expect
const Buffer = require('buffer').Buffer
const decrement = require('../lib/decrement')

const ZERO = Buffer.from([0])
const ONE = Buffer.from([1])

it('decrement', function () {
  expect(decrement(ONE)).to.deep.equal(ZERO)
  expect(decrement(Buffer.from([0x00, 0x01]))).to.deep.equal(Buffer.from([0xFF, 0x00]))
  expect(decrement(Buffer.from([0xFF, 0xFF]))).to.deep.equal(Buffer.from([0xFE, 0xFF]))
})
