// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

function noBoringZeros(n) {
  numArr = n.toString().split("")
  
  while(numArr[numArr.length-1] ==="0"){
    console.log("made it here")
    numArr.pop()
  }
  return Number(numArr.join(""))
}

console.log(noBoringZeros(1450))

