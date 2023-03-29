// Given an integer array nums, return true if any value appears at least twice in the 
// array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

function distinct(arr){
  cache = {}
  for(const val of arr){
    cache[val] = cache[val]+1 || 1
  }

  for(val in cache){
    if(cache[val] > 1){
      return true
    } else return false
  }
}

//leon's answer doesn't have to do the other check, and it stops the check the moment it finds a duplicate.
function distictAlt(arr){
  let numsMap={}
  for(let i = 0; i<=arr.length; i++){
    let num = arr[i]
    if(numsMap[num]){
      return true
    } else {
      numsMap[num] = true
    }
  }
  return false
}

console.log(distinct([1,2,3,1]))