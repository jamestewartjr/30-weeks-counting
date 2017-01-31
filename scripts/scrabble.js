const rl = require( 'readline-sync')

getInput = () => {
  let theLetters = Array.from( rl.question( 'What are the letters? ' ).toUpperCase() )
  return theLetters
}

let bagOfLetters =
{
  "E": 12,
  "A": 9,
  "I": 9,
  "O": 8,
  "N": 6,
  "R": 6,
  "T": 6,
  "L": 4,
  "S": 4,
  "U": 4,
  "D": 4,
  "G": 3,
  "_": 2,
  "B": 2,
  "C": 2,
  "M": 2,
  "P": 2,
  "F": 2,
  "H": 2,
  "V": 2,
  "W": 2,
  "Y": 2,
  "K": 1,
  "J": 1,
  "X": 1,
  "Q": 1,
  "Z": 1,
}

bagCheck = ( letter ) => {
  letter.forEach( data => {
    bagOfLetters[data] --
    return bagOfLetters[data]
  })

  return console.log(bagOfLetters)
}

bagCheck( getInput() )
