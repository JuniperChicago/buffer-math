const expect = require('chai').expect
const Buffer = require('buffer').Buffer
const isOdd = require('../lib/isOdd')

it('isOdd', function () {
  expect(isOdd(Buffer.from([0x00]))).to.equal(false)
  expect(isOdd(Buffer.from([0x05, 0x06]))).to.equal(true)
  expect(isOdd(Buffer.from([0x06, 0x05]))).to.equal(false)
})
