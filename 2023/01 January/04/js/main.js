// Count all the occurring characters in a string. If you have a string like aba, 
// then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function stringCounter(str){
  if(str.length <1){
    return {}
  }

  let strObj = {}

  str.toLowerCase().split("").forEach(val => {
    if(strObj.hasOwnProperty(val) &&val !== " "){
      strObj[val]+=1
    } else {
      strObj[val] = 1
    }
  })

  return strObj
}

console.log(stringCounter("Seven Shadows Cast"))
