// Find the greatest common divisor of two positive integers. 
// The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the 
// greatest common divisor will always be an integer that is also greater 
// or equal to 1.

// Test.assertEquals(mygcd(30,12),6)
// Test.assertEquals(mygcd(8,9),1)
// Test.assertEquals(mygcd(1,1),1)


function mygcd(num1,num2){
  if(num1 ===1||num2===1){
    return 1
  }

  let smallerNum =0
  let largerNum =0
  num1 > num2? smallerNum += num2 : smallerNum += num1
  num1 > num2? largerNum += num1 : largerNum += num2

  let gcdCache = 0
  let smallerDiv = smallerNum-1
  function smallerDivCalc(smallerNum,smallerDivfunc){
    if(smallerNum%smallerDivfunc !==0){
      smallerDiv -=1
      console.log(smallerDiv)
      smallerDivCalc(smallerNum, smallerDiv)
    } else {
      console.log(`returned smallest Div: ${smallerDiv}`)
    }
  }

  function gcdCalc(largerNum, smallerDivfunc){
    console.log("Made it into gcdCalc")
    if(largerNum%smallerDivfunc !==0){
      smallerDiv--
      smallerDivCalc(smallerNum,smallerDiv)
      gcdCalc(largerNum, smallerDiv)
    } else {
      gcdCache+=smallerDiv
    }
  }

  smallerDivCalc(smallerNum,smallerDiv)
  console.log(`The smallerDiv is :${smallerDiv}`)
  gcdCalc(largerNum, smallerDiv)
  return gcdCache

}


//Leon's answer
function mygcdAlt(x,y){
  return y == 0? x : mygcdAlt(y,x%y)

}

console.log(mygcdAlt(12,30))
// console.log(mygcd(9,8))
// console.log(mygcd(1,1))


