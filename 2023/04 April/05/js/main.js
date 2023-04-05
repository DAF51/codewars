// Factorial

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all 
// positive integers less than or equal to n. For example,

// 5! = 5 * 4 * 3 * 2 * 1 = 120.

// The value of 0! is 1.

// #Your task

// You have to create the function factorial that receives n and returns n!. You have to use recursion.

//My answer
function factClosure(num){
  let cache ={0:1,1:1}
  function factorial(num){
    if(num === 0|| num ===1){
      return cache[num]
    } else if(cache[num]){
      return cache[num]
    } else {
      for(let i = num; i > 1; i--){
        // console.log(i)
        return cache[i] =i*factorial(i-1)
      }
    }
  }

  factorial(num)
  return cache[num]
}


//Leon's answer
function factorialAlt(n){
  if(n <2){
    return 1
  }
  return n*factorial(n-1)
}

//leon's day 2 answer

function factorialAlt2(n){
  
}

// console.log(factClosure(1))
console.log(factClosure(100))