// Write a function which removes from string all non-digit characters and parse the remaining to number.
//  E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)


function getNumberFromString(s) {
  let arr = s.split("")
  let numArr = arr.filter(val => /[0-9]/.test(val)&& val)
  return Number(numArr.join(""))
}

console.log(getNumberFromString("hell5o wor6ld"))