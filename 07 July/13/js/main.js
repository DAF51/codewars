
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {
  let newArr = array.map(val => {
    if(val === 0){
      return -0
    } else if(val < 0) {
      return Math.abs(val)
    } else return val-val*2
  })
 return newArr
}