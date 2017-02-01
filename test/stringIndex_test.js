const chai = expect = require( 'chai' ).expect
const stringIndex = require( '../scripts/stringIndex.js')

describe.only( "StringIndex", () => {

  //splits the string by spaces
  it( "getString exists", () => {
    expect( getString() ).to.exist
  })

  it( "getString returns a string from user", () => {
    expect( getString() ).to.be.a( 'string' )
  })

  it( "getIndex returns a number from user", () => {
    expect( getIndex() ).to.be.a( 'number' )
  })

  it( "renderResult returns empty string for very large indices", () => {
    expect( renderResult( "Happy Feet", 3 ) ).to.be.equal( ' ' )
  })

  it( "renderResult returns empty string for negative indices", () => {
    expect( renderResult( "Happy Feet", -3 ) ).to.be.equal( ' ' )
  })

  it( "renderResult returns empty string for negative indices", () => {
    expect( renderResult( "Happy Feet", 2 ) ).to.be.equal( 'Feet' )
  })

})
