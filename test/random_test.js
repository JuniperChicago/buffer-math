const expect = require('chai').expect
const bitLength = require('../lib/bitLength')
const random = require('../lib/random')

it('random', function () {
  for (let i = 0; i <= 100; i++) expect(bitLength(random(9))).to.be.below(10)
  for (let i = 0; i <= 100; i++) expect(bitLength(random(512))).to.be.below(513)
})
