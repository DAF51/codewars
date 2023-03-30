// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. 
// You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

function majority(arr){
  let numMap = {}
  for(const val of arr){
    numMap[val] = numMap[val]+1 ||1
    if(numMap[val] > (arr.length/2)){
      return val
    }
  }
}

//if you sort the array then the value in the middle will always be the majority element
//The linear method is better for smaller data sets, while this one is O(n log n), which is
//better for larger data sets
function majorityAlt(arr){
  arr.sort()
  return arr[Math.floor(arr.length/2)]
}


console.log(majority([2,2,1,1,1,2,2]))
console.log(majority([3,2,3]))