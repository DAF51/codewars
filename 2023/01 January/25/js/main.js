// Task

// Given an array of integers , Find the maximum product obtained from multiplying 2 
// adjacent numbers in the array.
// Notes

//     Array/list size is at least 2.

//     Array/list numbers could be a mixture of positives, negatives also zeroes .

function adjacentElementsProduct(array) {
  let max = 0
  array.forEach((val,ind) => {
    const product = val*array[ind+1]
    if(ind ===0){
      max = product
    } else if(product > max){
      max = product
    }
  })
  return max
}
