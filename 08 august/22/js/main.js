// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: 
// a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
  const pointVal = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
    "i": 9,
    "j": 10,
    "k": 11,
    "l": 12,
    "m": 13,
    "n": 14,
    "o": 15,
    "p": 16,
    "q": 17,
    "r": 18,
    "s": 19,
    "t": 20,
    "u": 21,
    "v": 22,
    "w": 23,
    "x": 24,
    "y": 25,
    "z": 26,

  }

  const stringArr = x.split(" ")
  let sortableList = []
  stringArr.forEach(val => {
    const wordArr = val.split("")
    const wordPoints = wordArr.map(letter => {
      return pointVal[letter]
    })  
    sortableList.push([val, wordPoints.reduce((a,b)=> a+b,0)])
  })
  
  sortableList.sort((a,b)=> b[1]-a[1])

  return sortableList[0][0]
}


console.log(high('man i need a taxi up to ubud'))