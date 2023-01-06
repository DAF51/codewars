// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 

//My solution
function maxChar(string){
  const wordObject = {}
  for(let letter of string){
    if(wordObject[letter]){
      wordObject[letter]+=1
    } else {
      wordObject[letter] = 1
    }
  }

  let maxCount = {a:0}
  for(let letter in wordObject){
    // console.log(letter)
    // console.log(`The value of maxCount is =${Object.values(maxCount)} and wordObject[letter]=${wordObject[letter]}`)
    
    //Using Object.values might turn this into O(N). Max count doesn't need to be an object. It can just be
    //two separate variables
    if(Object.values(maxCount) < wordObject[letter]){
      maxCount = {[letter]:wordObject[letter]}
    }
  }
  return Object.keys(maxCount).toString()
} 

//Leon's answer
function maxCharAlt(string){
  let countObj = {}
  let count = 0
  let maxChar = null
  for(const char of string){
    countObj[char] = countObj[char]+1|| 1
  }

  for(const char in countObj){
    if(countObj[char] > count){
      count = countObj[char]
      maxChar = char
    }
  }

  return maxChar
}


console.log(maxCharAlt("Hello World"))
