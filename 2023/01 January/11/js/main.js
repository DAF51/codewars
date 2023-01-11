// Your task is to sum the differences between consecutive pairs in the array in descending order.
// Example

// [2, 1, 10]  -->  9

// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

function sumOfDifferences(arr) {
  let sum = 0
  const arrDec = arr.sort((a,b) => b-a)
  console.log(arrDec)
  for(let i = 0; i < arrDec.length; i++){
    if(i < arrDec.length-1){
      sum += (arrDec[i]-arrDec[i+1])
    }
  }
  return sum
}

console.log(sumOfDifferences([2, 1, 10] ))