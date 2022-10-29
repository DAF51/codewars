// Acknowledgments:

// I thank yvonne-liu for the idea and for the example tests :)
// Description:

// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. 
// Here are the conditions:

//     Your message is a string containing space separated words.
//     You need to encrypt each word in the message using the following rules:
//         The first letter must be converted to its ASCII code.
//         The second letter must be switched with the last letter
//     Keepin' it simple: There are no special characters in the input.

// Examples:

// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"


const encryptThis = function(text){
  let textArr = text.split(" ")
  let encryptedPhrase = []
  for(let word of textArr){
    let temp = ""
    let wordArr= word.split("")
    let newWord= wordArr.map((letter, ind) => {
      if(word.length ===1|| ind === 0){
        return letter.charCodeAt(0).toString()
      } else if(ind === 1){
        temp = letter
        return wordArr[wordArr.length-1]
      } else if(ind ===wordArr.length-1){
        return temp
      } else {
        return letter
      }
    })
    encryptedPhrase.push(newWord.join(""))
  }
  return encryptedPhrase.join(" ")
}


console.log(encryptThis("A"))
console.log(encryptThis("hello world"))
console.log(encryptThis("A wise old owl lived in an oak"))