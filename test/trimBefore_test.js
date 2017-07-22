const expect = require('chai').expect
const Buffer = require('buffer').Buffer
const trimBefore = require('../lib/trimBefore')

it('trimBefore', function () {
  expect(trimBefore(Buffer.from([0x00]))).to.deep.equal(Buffer.from([0x00]))
  expect(trimBefore(Buffer.from([0x01]))).to.deep.equal(Buffer.from([0x01]))
  expect(trimBefore(Buffer.from([0x00, 0x00, 0x05, 0x00]))).to.deep.equal(Buffer.from([0x05, 0x00]))
  expect(trimBefore(Buffer.from([0x00, 0x05, 0x00, 0x00]))).to.deep.equal(Buffer.from([0x05, 0x00, 0x00]))
})
