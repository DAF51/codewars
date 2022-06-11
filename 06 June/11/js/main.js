
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained

function expressionMatter(a, b, c) {
  let vals = []
  vals.push(a*(b+c))
  vals.push((a+b)*c)
  vals.push(a*b*c)
  vals.push(a+b*c)
  vals.push(a+b+c)
  return Math.max(...vals)
}