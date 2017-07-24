const expect = require('chai').expect
const Buffer = require('buffer').Buffer
const getBit = require('../lib/getBit')

const BIG_NUM_1 = Buffer.from([0x8F, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x15])

it('getBit', function () {
  expect(getBit(BIG_NUM_1, 0)).to.equal(1)
  expect(getBit(BIG_NUM_1, 1)).to.equal(2)
  expect(getBit(BIG_NUM_1, 2)).to.equal(4)
  expect(getBit(BIG_NUM_1, 5)).to.equal(0)
  expect(getBit(BIG_NUM_1, 10)).to.equal(4)
  expect(getBit(BIG_NUM_1, 64)).to.equal(1)
  expect(getBit(BIG_NUM_1, 65)).to.equal(0)
})
