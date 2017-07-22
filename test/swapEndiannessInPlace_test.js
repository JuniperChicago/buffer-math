const expect = require('chai').expect
const Buffer = require('buffer').Buffer
const swapEndiannessInPlace = require('../lib/swapEndiannessInPlace')

it('swapEndiannessInPlace', function () {
  const ZERO = Buffer.from([0x00])
  expect(swapEndiannessInPlace(ZERO)).to.equal(ZERO)
  const NUM_1 = Buffer.from([0x7F, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x15])
  expect(swapEndiannessInPlace(NUM_1))
    .to.equal(NUM_1)
    .and.to.deep.equal(Buffer.from([0x15, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x7F]))
  const NUM_2 = Buffer.from([0x4A, 0xCB, 0x5C, 0x38, 0xAC, 0x6D, 0xAE, 0xAA])
  expect(swapEndiannessInPlace(NUM_2))
    .to.equal(NUM_2)
    .and.to.deep.equal(Buffer.from([0xAA, 0xAE, 0x6D, 0xAC, 0x38, 0x5C, 0xCB, 0x4A]))
})
