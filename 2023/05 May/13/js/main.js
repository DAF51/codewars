// Given an array of 4 integers
// [a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

// For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

//    a:x1
//    b:y1
//    c:x2
//    d:y2

// Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). 

function slope(points){
  const x1 = points[0]
  const y1 = points[1]
  const x2 = points[2]
  const y2= points[3]
  const solution = (y2-y1)/(x2-x1)
  console.log(solution)
  if (!Number.isInteger(solution)){
    return "undefined"
  }

  return String(solution)
}

console.log(slope([-10,6,"5dsfa",3]))