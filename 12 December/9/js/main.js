// Description:

// Remove all exclamation marks from the end of sentence.
// Examples

// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"


function remove (string) {  
  const stringArr = string.split("")
  while(stringArr[stringArr.length-1]==="!"){
    stringArr.pop()
  }
  return stringArr.join("")
}


console.log(remove("!!H!i!!!") === "!!H!i")