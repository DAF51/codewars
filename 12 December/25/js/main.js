// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, 
// then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the array and no difference with it, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

// findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')

// function findDeletedNumber(arr){
//   const maxVal = Math.max(...arr)
//   const length = arr.length
//   let deletedVal = 0
//   if (maxVal != length){
//     const sortedArr = arr.sort((a,b)=> a-b)
//     const numAfter =sortedArr.find((val,ind) => {return val !=ind+1})
//     deletedVal = numAfter-1
//   }
//   return deletedVal
// }


// array_length = arr.length
// array_sum = arr.sum()

// expected_sum = (1 + array_length)/2 * array_length

// if array_sum == expected_sum
//   return 0
// else
//   # We're missing a number, so the original array was one longer
//   new_array_length = array_length + 1
//   new_expected_sum = (1 + new_array_length)/2 * new_array_length
  
//   # array_sum here is the same one we calculated way earlier at the start
//   missing_number = new_expected_sum - array_sum
//   return missing_number
// end



function findDeletedNumberAltTwo(arr){
  const maxVal = Math.max(...arr)
  const length = arr.length
  let deletedVal = 0
  if (maxVal != length){
    const expected_sum = ((maxVal)*(maxVal+1))/2
    const sum = arr.reduce((a,b) => a+b,0)
    deletedVal=(expected_sum-sum)
    
  }
  return deletedVal
}

console.log(findDeletedNumberAltTwo([3,4,1,5]))
console.log(findDeletedNumberAltTwo([1,9,7,4,6,2,3,8]))
console.log(findDeletedNumberAltTwo([5,7,6,9,4,8,1,2,3]))