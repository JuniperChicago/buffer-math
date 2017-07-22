const expect = require('chai').expect
const Buffer = require('buffer').Buffer
const compare = require('../lib/compare')

it('compare', function () {
  expect(compare(Buffer.from([0x00]), Buffer.from([0x00]))).to.equal(0)
  expect(compare(Buffer.from([0xFA, 0x10, 0xDC]), Buffer.from([0xFA, 0x10, 0xDC]))).to.equal(0)
  expect(compare(Buffer.from([0xFA, 0x10, 0xDC]), Buffer.from([0xF9, 0x10, 0xDC]))).to.equal(1)
  expect(compare(Buffer.from([0xF9, 0x10, 0xDC]), Buffer.from([0xFA, 0x10, 0xDC]))).to.equal(-1)
})
