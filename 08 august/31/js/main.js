// Create a function called shortcut to remove the 
// lowercase vowels (a, e, i, o, u ) in a given string.
// Examples

// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

function shortcut (string) {
  const newString = string.replace(/[aeiou]/g, "")
  return newString
}

