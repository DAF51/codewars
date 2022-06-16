
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any 
// elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


var uniqueInOrder=function(input){
  if(typeof input === "string"){
    input = input.split("")
  }
  let uniArr = []
  
  input.forEach(currentVal => {
    if(uniArr.length === 0){
      uniArr.push(currentVal)
    } else if(uniArr[uniArr.length-1] !== currentVal){ 
      uniArr.push(currentVal)
    }
  })

  return uniArr
}

// console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder([1,2,2,3,3]))