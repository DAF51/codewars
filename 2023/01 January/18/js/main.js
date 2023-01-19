// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

const orderedCount = function (text) {
  let charArray = Array.from(text)
  let countArr =[]
  charArray.forEach((val) => {
    if(countArr.some(row => row.includes(val))){
      const ind =countArr.findIndex(tup => tup[0] === val)
      countArr[ind][1] +=1
    } else{
      countArr.push([val, 1])
    }
  })

  return countArr
}


console.log(orderedCount("233312"))