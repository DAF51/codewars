// Define a function that removes duplicates from an array of numbers and 
// returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
  const newArr = a.filter((val, ind) => {
    return a.indexOf(val)===ind
  })
  return newArr
}