const expect = require('chai').expect
const Buffer = require('buffer').Buffer
const isOne = require('../lib/isOne')

it('isOne', function () {
  expect(isOne(Buffer.from([0x00]))).to.equal(false)
  expect(isOne(Buffer.from([0x00, 0x00, 0x00]))).to.equal(false)
  expect(isOne(Buffer.from([0x00, 0x00, 0x01]))).to.equal(false)
  expect(isOne(Buffer.from([0x01, 0x00, 0x00]))).to.equal(true)
})
