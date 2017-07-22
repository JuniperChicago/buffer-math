const expect = require('chai').expect
const Buffer = require('buffer').Buffer
const trimAfter = require('../lib/trimAfter')

it('trimAfter', function () {
  expect(trimAfter(Buffer.from([0x00]))).to.deep.equal(Buffer.from([0x00]))
  expect(trimAfter(Buffer.from([0x01]))).to.deep.equal(Buffer.from([0x01]))
  expect(trimAfter(Buffer.from([0x00, 0x00, 0x05, 0x00]))).to.deep.equal(Buffer.from([0x00, 0x00, 0x05]))
  expect(trimAfter(Buffer.from([0x00, 0x05, 0x00, 0x00]))).to.deep.equal(Buffer.from([0x00, 0x05]))
})
