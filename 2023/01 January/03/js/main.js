// Given a string of characters as input, write a function that returns it with the characters reversed. 
// No Reverse Method (well brute force it first, but then no reverse method)! 

function reverseStr(str){
  let newArr = []
  let strArr= str.split("")
  while(strArr.length > 0){
    newArr.push(strArr.pop(""))
  }
  return newArr.join("")
}

function reverseStrAlt(str){
  let newStr = ""
  for(letter of str){
    newStr= letter +newStr
  }
  return newStr
}

console.log(reverseStrAlt("ABCD"))