const expect = require('chai').expect
const scrabble = require('../scripts/scrabble.js')

describe( "Scrabble", () => {

  it( "getInput() will return an array", () => {
    expect( getInput() ).to.be.instanceof(Array)
  })

  it( "bagCheck() is an object", () => {
    expect( bagCheck( 'a' ) ).to.be.exist
  })

})
