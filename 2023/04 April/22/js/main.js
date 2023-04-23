// Definition

// A Tidy number is a number whose digits are in non-decreasing order.
// Task

// Given a number, Find if it is Tidy or not . 

// Input >> Output Examples

// tidyNumber (12) ==> return (true)

// Explanation:

// The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .

// tidyNumber (32) ==> return (false)

// Explanation:

// The Number's Digits { 3, 2} are not in non-Decreasing Order (i.e) 3 > 2 .

function tidyNumber(n){
  const numArr = n.toString().split("").map(val => {
    return Number(val)
  })

  let tidy = true

  numArr.forEach((val,ind) => {
    if(val > numArr[ind+1]){
      tidy = false
    }
  })

  return tidy
}

console.log(tidyNumber(213))