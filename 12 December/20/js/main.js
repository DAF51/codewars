// Return the number of unique arrays that can be formed by picking exactly 
// one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. 
// They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; 
// for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just 
// duplicates.

// solve([[1,2],[4],[5,6]]),4)
// solve([[1,2],[4,4],[5,6,6]]),4)
// solve([[1,2],[3,4],[5,6]]),8)
// solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)


function solve(arr){
  let subSets = arr.map(sub => {
    let subSet = new Set(sub)
    return Array.from(subSet) 
  })
  return subSets.reduce((a,b) => a*b.length, 1)
}

//You could also just return set.size() from the map, to get an array of sizes that can 
//then be reduced

// console.log(solve([[1,2],[4],[5,6]]))
// console.log(solve([[1,2],[4,4],[5,6,6]]))
// console.log(solve([[1,2],[3,4],[5,6]]))
// console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]))
