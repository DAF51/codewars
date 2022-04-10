// Complete the function that accepts a string parameter, and reverses each word in 
// the string. All spaces in the string should be retained.
// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  let stringArray= str.split(/(\s+)/)
  stringArray.forEach((currentVal,i) => {
    if(currentVal){
      stringArray[i] = currentVal.split("").reverse().join("")
    }
  })

  return stringArray.join("")
}


// Turns out I didn't need to complicate this with regular expressions, if I had simply started with a .split(" ")
// this would have worked out just fine either way.

// function reverseWords(str) {
//   let stringArray= str.split(" ")
//   console.log(stringArray)
//   console.log(stringArray.join(" "))
// }

// reverseWords("This      is    an  example!")
