Description:

// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of 
// string. For a beginner kata, you can assume that the input data is always a non empty string,
// no need to verify it.
// Examples

// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"

function remove (string) {
  let stringArr = string.split("")
  console.log(stringArr)
  let newStringArr=stringArr.map((char, ind)=> {
    if(char ==="!"&& ind !=stringArr.length-1){
      console.log("Found 1")
      return ""
    } else if(ind === stringArr.length-1 && char != "!"){
      return char+"!"
    } else {
      return char
    }
  })
  return newStringArr.join("")
}


console.log(remove("Hi!!!"))
