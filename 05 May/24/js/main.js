// The main idea is to count all the occurring characters in a string. 
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {  
  let charCount = {}
  if(!string){
    return {};
  } else {
    let stringArray = string.split("")
    stringArray.forEach(currentChar => {
      if(currentChar in charCount){
        charCount[currentChar]++
      } else {
        charCount[currentChar] = 1
      }
    })

  }
   return charCount;
}

