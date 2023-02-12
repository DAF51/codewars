// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
  //  [[ 0, 1, 2, 3, 4 ],
  //   [ 10,11,12,13,14 ],
  //   [ 20,21,22,23,24 ],
  //   [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

function toCsvText(array) {
  const oneDArr = array.map((arr,ind) => {
    if(ind === array.length-1){
      return arr.join(",")
    }else {
    return arr.join(",")+"\n"
    }
  })
  const CSV = oneDArr.join("")
  return CSV
}

console.log(toCsvText(   [[ 0, 1, 2, 3, 4 ],
  [ 10,11,12,13,14 ],
  [ 20,21,22,23,24 ],
  [ 30,31,32,33,34 ]] ))
