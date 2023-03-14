// Find the sum of the odd numbers within an array, after cubing the initial 
// integers. The function should return undefined if any of the values aren't 
// numbers.

function cubeOdd(arr) {
let fail = false
  arr.forEach(val => {
    if(!Number.isInteger(val)){
      return fail = true
    }
  })

  if(fail){
    return undefined
  }

  const arrCubed = arr.map(val => {
    return val**3
  })

  const arrFiltered = arrCubed.filter(val =>{ 
    return val%2 !==0
  })
  
  return arrFiltered.reduce((a,b) => a+b, 0)
 
}

  console.log(cubeOdd([1, "a", 3, 4]))