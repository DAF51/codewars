// Scenario

// Now that the competition gets tough it will Sort out the men from the boys .

// Men are the Even numbers and Boys are the odd

// Given an array/list [] of n integers , Separate The even numbers from the odds , 
// or Separate the men from the boys

// Return an array/list where Even numbers come first then odds

// Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

// Array/list size is at least 4 .

// Array/list numbers could be a mixture of positives , negatives .

// Have no fear , It is guaranteed that no Zeroes will exists . 

// Repetition of numbers in the array/list could occur , So (duplications are not included when separating).

function menFromBoys(arr){
  let men = []
  let boys = []
  arr.forEach(val => {
    if(val%2 ===0){
      men.push(val)
    }else {
      boys.push(val)
    }
  })

  const menUnique = new Set(men)
  const boysUnique = new Set(boys)

  men = Array.from(menUnique)
  boys = Array.from(boysUnique)

  men.sort((a,b) => a-b)
  boys.sort((a,b) => b-a)
  return men.concat(boys)
}