// You will be given an array of strings and your task is to remove all 
// consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces 

// dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
// dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
// dup(["kelless","keenness"]), ['keles','kenes'])


function dup(arr){
  let twoDArr = arr.map(string => {
    let newString = string.split("")
    //my answer originally used val !==arr[ind+1], but apparently checking the next item causes problems
    //so the solution is to make sure the current value does not equal the previous value
    return newString.filter((val,ind,arr) => val !== arr[ind-1]).join("")
  })

  // twoDArr = twoDArr.map(arr => {
  //   console.log(arr)
  //   return arr.filter((val,ind) => val !== arr[ind+1]).join("")
  // })
  return twoDArr
}


console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
console.log(dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
console.log(dup(["kelless","keenness"]), ['keles','kenes'])