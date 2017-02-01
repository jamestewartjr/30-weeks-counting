const rl = require( 'readline-sync')

getString = () => rl.question( 'What is the string? ' )

getIndex = () => parseInt( rl.question( 'What index do you want? ' ) )

renderResult = ( phrase, index ) => {
  index --
  if( index < 0 || index > phrase.length ) {
    return( ' ' )
  }
  else {
    let phraseAsArray =  phrase.split( ' ' )
    return console.log( phraseAsArray[index])
  }

}

renderResult( getString(), getIndex() )
