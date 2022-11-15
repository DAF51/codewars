// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  let cache= {}
  arr.forEach(val => {
    if(val in cache){
      cache[val] = true
    } else {
      cache[val] = false
    }
  })
  
  for(val in cache){
    if(cache[val]=== false){
      return Number(val)
    }
  }
}

console.log(findUniq([ 3, 10, 3, 3, 3 ]))