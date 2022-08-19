// You will be given an array and a limit value. You must check that all 
// values in the array are below or equal to the limit value. If they are, 
//  true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit){
  let limCheck= a.map(val => {
    return val <= limit
  })

  if(limCheck.includes(false)){
    return false
  } else {
    return true
  }
}