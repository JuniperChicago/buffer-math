const expect = require('chai').expect
const Buffer = require('buffer').Buffer
const msBPos = require('../lib/msBPos')

it('msBPos', function () {
  expect(msBPos(Buffer.from([0x00]))).to.equal(0)
  expect(msBPos(Buffer.from([0x05]))).to.equal(0)
  expect(msBPos(Buffer.from([0x05, 0x00]))).to.equal(0)
  expect(msBPos(Buffer.from([0x00, 0x05]))).to.equal(1)
  expect(msBPos(Buffer.from([0x7F, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x15]))).to.equal(8)
  expect(msBPos(Buffer.from([0x4A, 0xCB, 0x5C, 0x38, 0xAC, 0x6D, 0xAE, 0xAA]))).to.equal(7)
})
