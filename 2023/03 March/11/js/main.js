// Given a string, capitalize the letters that occupy even 
// indexes and odd indexes separately, and return as shown below. 
// Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. 
// See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try: 
function capitalize(s){
  let even = s.split("").map((val,ind) => {
    if(ind %2 ===0){
      return val.toUpperCase()
    } else {
      return val
    }
  }).join("")
  let odd= s.split("").map((val,ind) => {
    if(ind %2 !==0){
      return val.toUpperCase()
    } else {
      return val
    }
  }).join("")

  return [even, odd]
};
