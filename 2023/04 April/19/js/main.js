// In this Kata, you will be given a string and your task will be to 
// return a list of ints detailing the count of uppercase letters, lowercase,
//  numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special 
// characters.

function solve(s){
  let upper = 0
  let lower = 0
  let num = 0
  let special = 0

  s.split("").forEach(val => {
    /[a-z]/.test(val) && lower++;
    /[A-Z]/.test(val) && upper++;
    /[0-9]/.test(val) && num++;
    /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(val) && special++
  })

  return [upper, lower, num, special]
 }

 console.log(solve("*'&ABCDabcde12345"))