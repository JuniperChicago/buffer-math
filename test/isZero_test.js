const expect = require('chai').expect
const Buffer = require('buffer').Buffer
const isZero = require('../lib/isZero')

it('isZero', function () {
  expect(isZero(Buffer.from([0x00]))).to.equal(true)
  expect(isZero(Buffer.from([0x00, 0x00, 0x00]))).to.equal(true)
  expect(isZero(Buffer.from([0x00, 0x00, 0x01]))).to.equal(false)
  expect(isZero(Buffer.from([0x01, 0x00, 0x00]))).to.equal(false)
})
