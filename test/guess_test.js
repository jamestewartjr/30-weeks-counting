const expect = require( 'chai' ).expect
const guess = require( '../scripts/guess.js' )

describe( "Number Guessing", () => {

  it( "randomNumberSelector() should exist", () => {
    expect( randomNumberSelector() ).to.be.exist
  })

  it( "randomNumberSelector() should return a number", () => {
    expect( randomNumberSelector() ).to.be.within( 1, 100 )
  })

  it( "userGuess() should exist", () => {
    expect( userGuess() ).to.be.exist
  })

  it( "userGuess() should return a number between 1 and 100", () => {
    expect( userGuess() ).to.be.within( 1, 100 )
  })

  it( "checkGuess() returns too big message if guess is larger", () => {
    expect( checkGuess( 50, 75 ) ).to.equal( console.log("Your guess is too big!") )
  })

  it( "checkGuess() returns too small message if guess is smaller", () => {
    expect( checkGuess( 50, 25) ).to.equal( console.log("Your guess is too small!"))
  })

  it( "checkGuess() returns win message if guess is right", () => {
    expect( checkGuess( 50,50 ) ).to.equal( console.log("Your guess is right!") )
  })
  
  it( "checkGuess() exits with message with exit ", () => {
    expect( checkGuess( 50, 'exit') ).to.equal( console.log("kthxbai") )
  })
})
