// Task

// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

function minSum(arr) {
  const sortedArr = arr.sort((a,b) => a-b)
  let sum = 0
  while(sortedArr.length != 0){
    let numOne = sortedArr.shift()
    let numTwo = sortedArr.pop()
    sum+= numOne*numTwo
  }
  return sum
}

console.log(minSum([12,6,10,26,3,24]))