// Given an array of numbers, return all pairs that add up to a given sum. 
// The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

function twoSum(arr, sum){
  let twoSums = []
  let cache = {}
  for(num of arr){
    if(cache[sum-num]){
      twoSums.push([num,cache[sum-num]])
    } else {
      cache[num] = num
    }
  }
  return twoSums
}

function twoSumAlt(arr, sum){
  const pairs = []
  const nums = {}

  for(val of arr){
    if(nums[sum-val]){
      pairs.push([val, sum-val])
    } else{
      nums[val] = 1
    }
  }
  return pairs
}

console.log(twoSumAlt([1, 2, 2, 3, 4], 4))