// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
// Examples

// explode("312")

// should return :

// "333122"

// explode("102269")

// should return :

// "12222666666999999999"

function explode(s) {
  const explosion = s.split("").map(val => {
    console.log(val)
    const chunk = val.repeat(Number(val))
    return chunk
  }).join("")
  
  return explosion
}

console.log(explode("312"))