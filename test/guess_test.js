var chai = require( 'chai' )
var guess = require('../scripts/guess.js')

describe( "numberGuess()", function() {
  it("exists to use", function() {
    expect(guess.Guess()).to.not.be.null
  })
})
