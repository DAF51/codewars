// Your task is to find the nearest square number, nearest_sq(n), of a 
// positive integer n.

// Goodluck :)

// Check my other katas:

function nearestSq(n){
  const sqrOfN=Math.sqrt(n)
  const before= Math.floor(sqrOfN)**2
  const after = Math.ceil(sqrOfN)**2

  if(sqrOfN%2===0){
    return n
  }else if((n-before) > (after-n)||(n-before)===(after-n)){
    return after
  } else {
    return before
  }
}

console.log(nearestSq(111))