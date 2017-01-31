const rl = require( 'readline-sync' )

randomNumberSelector = () => {
  return Math.round( Math.random() * (1, 100) + 1 )
}

userGuess = () => {
  return rl.question( 'What is your guess? ')
}

checkGuess = ( randomNum, guestGuess ) => {
  if( guestGuess === randomNum ) {
    return console.log( "Your guess is right!" )
  }
  else if( guestGuess > randomNum ) {
    return console.log( "Your guess is too big!" )
  }
  else if( guestGuess < randomNum ) {
    return console.log( "Your guess is too small!" )
  }
  else if( guestGuess === 'exit' ) {
    return console.log( "kthxbai" )
  }
  else{
    return console.log( "That guess is unrelated!" )
  }
}

checkGuess( randomNumberSelector(), userGuess() )
