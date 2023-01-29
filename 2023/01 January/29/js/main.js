// Given a mixed array of number and string representations of integers, 
// add up the non-string integers and subtract this from the total of the string integers.

// Return as a number.

function divCon(x){
  const str = []
  const num = []
  x.forEach(val => {
    console.log(val)
    if(val === parseInt(val)){
      num.push(val)
    } else {
      str.push(val)
    }
  })

  const strNum = str.map(val => {
    return parseInt(val)
  })

  console.log(num)
  console.log(str)

  return num.reduce((a,b) => a+b,0) - strNum.reduce((a,b) => a+b,0)
}

console.log(divCon([9, 3, '7', '3']))