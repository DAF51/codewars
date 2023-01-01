// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain
//  all vowles but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

function vowel(str){
  const vowelArr = ["a", "e", "i", "o", "u"]
  const strNorm = str.toLowerCase()
  let missingInd = ""

  //My second solution, which does not use regex
  vowelArr.forEach((vow, ind) => {
    if(!strNorm.match(vow)){
      missingInd = ind
    }
  })

  //My original solution, which also works, but uses regex

  // vowelArr.forEach((vow,ind) => {
  //   const regEx = new RegExp(vow)
  //   if(!regEx.test(strNorm)){
  //     // console.log(`The letter ${vow} is missing. It is index ${ind}`)
  //     return missingInd = ind
  //   }
  // })

  return missingInd

}


function vowelAlt(str){
  let vowels = "aeiou"
  for(let i=0; i < vowels.length; i++){
    if(str.indexOf(vowels[i]=== -1)){
      return i
    }
  }
}


//potential third solution using an object
function vowelAltSet(str){
  let vowelsArr = ["a","e","i","o","u"]
  let vowels = {"a":0, "e":0, "i":0, "o":0, "u":0}
  const strNormArr = str.toLowerCase().split("")
  strNormArr.forEach((letter, ind) => {
    if(vowels.hasOwnProperty(letter)){
      vowels[letter]+=1
    }
  })

  const missingVowel=Object.keys(vowels).find(val => vowels[val]===0)
  return vowelsArr.indexOf(missingVowel)
}

console.log(vowelAltSet("John Doe hs seven red pples under his bsket"))
console.log(vowelAltSet("Bb Smith sent us six neatly arranged range bicycles"))