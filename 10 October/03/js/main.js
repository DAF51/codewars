// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

function position(letter){
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("")
  const letterNorm = letter.toLowerCase()
  return `Position of alphabet: ${alpha.indexOf(letterNorm)+1}`
}