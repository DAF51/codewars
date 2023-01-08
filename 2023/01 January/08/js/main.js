// Given a string s, write a method (function) that will 
// return true if its a valid single integer or floating number or 
// false if its not.

// Valid examples, should return true:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")

// should return false:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")

function isDigit(s) {
  stringNorm = s.replace(/^[-]/,"")
  stringNorm = stringNorm.replace(".","")
  console.log(stringNorm)
  return /^[0-9]+$/.test(stringNorm)
}

console.log(isDigit("-3"))

