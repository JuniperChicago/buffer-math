const expect = require('chai').expect
const Buffer = require('buffer').Buffer
const isEven = require('../lib/isEven')

it('isEven', function () {
  expect(isEven(Buffer.from([0x00]))).to.equal(true)
  expect(isEven(Buffer.from([0x05, 0x06]))).to.equal(false)
  expect(isEven(Buffer.from([0x06, 0x05]))).to.equal(true)
})
