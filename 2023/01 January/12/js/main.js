// Complete the method which accepts an array of integers,
//  and returns one of the following:

//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
//     "yes, descending" - if the numbers in the array are sorted in a descending order
//     "no" - otherwise

// You can assume the array will always be valid, and
//  there will always be one correct answer.


function isSortedAndHow(array) {
  const arrayCopyOne = array.slice()
  const arrAsc= arrayCopyOne.sort((a,b) => a-b)
  const arrayCopyTwo = array.slice()
  const arrDec = arrayCopyTwo.sort((a,b) => b-a)

  if(array.join("")===arrAsc.join("")){
    return "yes, ascending"
  } else if(array.join("")===arrDec.join("")){
    return "yes, descending"
  } else {
    return "no"
  }
}

console.log(isSortedAndHow([4,3,2]))

