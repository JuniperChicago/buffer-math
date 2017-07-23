const expect = require('chai').expect
const Buffer = require('buffer').Buffer
const increment = require('../lib/increment')

const ZERO = Buffer.from([0])
const ONE = Buffer.from([1])

it('increment', function () {
  expect(increment(ZERO)).to.deep.equal(ONE)
  expect(increment(ONE)).to.deep.equal(Buffer.from([2]))
  expect(increment(Buffer.from([0xFF, 0x00]))).to.deep.equal(Buffer.from([0x00, 0x01]))
  expect(increment(Buffer.from([0xFF, 0xFF]))).to.deep.equal(Buffer.from([0x00, 0x00, 0x01]))
})
