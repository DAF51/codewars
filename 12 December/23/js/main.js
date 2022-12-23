// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

//This one is O(n^2)
function modify(str){
  let strArry = str.split(" ")
  const newStr = strArry.map(word => {
    let newWord = word.split("").map(let =>{
      if(let === let.toUpperCase()){
        return let.toLowerCase()
      } else {
        return let.toUpperCase()
      }
    })
    return newWord.join("")
  })
  return newStr.join(" ")
}

//This one is O(N)
function modifyAlt(str){
  let strArry = str.trim().split("")
  const newStr = strArry.map(let => {
    if(let === let.toUpperCase()){
      return let.toLowerCase()
    } else if(let === let.toLowerCase()){
      return let.toUpperCase()
    }
  })
  return newStr.join("")
}

//actual solution
function modifyAltTwo(str){
  let revStr = str.split(" ").reverse().join(" ")
  let transStr = revStr.split("").map(letter => {
    return letter ===letter.toUpperCase()? letter.toLowerCase(): letter.toUpperCase()
  }).join("")
  return transStr
}
console.log(modifyAltTwo("Example Input"))

