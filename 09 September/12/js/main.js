// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

function remainder(n, m){
  let divisor = n > m? n : m;
  let dividend = n< m? n: m;

  if(dividend === 0){
    return NaN
  } else {
    return divisor % dividend
  }
}