// Definition

// Jumping number is the number that All adjacent digits in it differ by 1.
// Task

// Given a number, Find if it is Jumping or not . 

function jumpingNumber(n){
  let jump = "Jumping!!"
  const numArr = String(n).split("")
  numArr.forEach((val, ind) => {
    const num=Number(val)
    if(ind < numArr.length-1){
      if(Math.abs(Number(numArr[ind+1])-num) !=1){
        jump = "Not!!"
      }
    }
  })

  return jump
}

