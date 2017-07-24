const expect = require('chai').expect
const Buffer = require('buffer').Buffer
const modPow = require('../lib/modPow')

const BIG_NUM_1 = Buffer.from([0x8F, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x15])
const BIG_NUM_2 = Buffer.from([0x7A, 0xCB, 0x5C, 0x38, 0xAC, 0x6D, 0xAE, 0xAA])

it('modPow', function () {
  expect(modPow(BIG_NUM_2, BIG_NUM_1, Buffer.from([0xEF, 0xCD, 0xAB]))).to.deep.equal(Buffer.from([0x36, 0x48, 0x33]))
  expect(modPow(BIG_NUM_2, BIG_NUM_1, Buffer.from([0xBC, 0x0A]))).to.deep.equal(Buffer.from([0xC8, 0x07]))
  expect(modPow(BIG_NUM_1, BIG_NUM_2, Buffer.from([0xBC, 0x0A]))).to.deep.equal(Buffer.from([0x3D]))
})
