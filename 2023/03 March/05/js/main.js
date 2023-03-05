// Task

// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
// Notes :

//     Array/list size is at least 3 .

//     Array/list numbers could be a mixture of positives , negatives and zeros .

//     Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

function maxTriSum(numbers){
  const numSet = new Set(numbers.sort((a,b) => b-a))
  const uniqueArr = Array.from(numSet)
  return uniqueArr[0]+uniqueArr[1]+uniqueArr[2]
}


console.log(maxTriSum([3,2,6,8,2,3]))