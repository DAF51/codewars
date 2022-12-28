
// You will be given an array of numbers. You have to sort the odd numbers 
// in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
// sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])


//this solution does not work

// function sortArray(arr){
//   let evens = {}
//   arr.forEach((val,ind) => {
//     if(val%2===0){
//       evens[val]=ind
//     }
//   })

//   let odds = arr.filter(val => val%2 !=0).sort((a,b) => a-b)

//   while(odds.length < arr.length-1){
//     odds.push("placeholder")
//   }

//   console.log(odds)
  
//   for(val in evens){
//     console.log(evens[val])
//     odds.splice(evens[val], 0, Number(val))
//     odds = odds.filter(val => val != "placeholder")
//   }
//   return odds
// }


//actual solution
function sortArrayAlt(arr){
  //At first this used a-b and shift, but that turns the map into an o(n^2) function.
  //arr.pop() however is linear, so by sorting it backwards and poping you turn it
  //into o(n)
  let odds = arr.filter(val => val % 2 !==0).sort((a,b) => b-a)
  let finalArr = arr.map(val => val % 2? val: odds.pop())
  return finalArr
}


console.log(sortArrayAlt([5, 3, 2, 8, 1, 4]))
// console.log(sortArray([5, 3, 1, 8, 0]))
console.log(sortArrayAlt([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))