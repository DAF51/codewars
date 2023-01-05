// You're given strings jewels representing the types of stones that are jewels, 
// and stones representing the stones you have. Each character in stones is a type of 
// stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

function jewel(jewels, stones){
  const jewelsArr= jewels.split("")
  //this seems to be an effective way to turn arrays into objects
  const jewelsObj= jewelsArr.reduce((a,b) =>{return {...a, [b]: true};}, {})

  console.log(jewelsObj)

  const stoneArr= stones.split("")
  let jewelsHeld = {}
  stoneArr.forEach(stn => {
    if(jewelsObj.hasOwnProperty(stn) && jewelsHeld.hasOwnProperty(stn)){
      jewelsHeld[stn]+=1
    } else if(jewelsObj.hasOwnProperty(stn)){
      jewelsHeld[stn] = 1
    }
  })

  console.log(jewelsHeld)
  let totaljewels = Array.from(Object.values(jewelsHeld))
  return totaljewels.reduce((a,b) => a+b, 0)
}




//alt answer using sets
function jewelAlt(jewels, stones){
  const jewelSet = new Set(jewels.split(""))


  const stoneArr= stones.split("")
  let jewelsHeld = {}
  stoneArr.forEach(stn => {
    if(jewelSet.has(stn) && jewelsHeld.hasOwnProperty(stn)){
      jewelsHeld[stn]+=1
    } else if(jewelSet.has(stn)){
      jewelsHeld[stn] = 1
    }
  })

  console.log(jewelsHeld)
  let totaljewels = Array.from(Object.values(jewelsHeld))
  return totaljewels.reduce((a,b) => a+b, 0)
}

//A more efficient version of the set answer
function jewelAltTwo(jewels, stones){
  const jewelSet = new Set(jewels.split(""))


  const stoneArr= stones.split("")
  let jewelsHeld = 0
  stoneArr.forEach(stn => {
    if(jewelSet.has(stn)){
      jewelsHeld+=1
    }
  })

  return jewelsHeld
}


//Leon's first version of the answer.
function jewelLeonOne(jewels, stones){
  const map = {}
  let count = 0
  //This pattern for creating objects is the big takeaway from this version of the thing
  for(const jewel of jewels){
    map[jewel] = true
  }

  for(const stone of stones){
    if(map[stone]){
      count+=1
    }
  }
  return count
}


console.log(jewelAltTwo("aA", "aAAbbbb"))