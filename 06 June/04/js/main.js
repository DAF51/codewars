// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:

//     There must be a function for each number from 0 ("zero") to 9 ("nine")
//     There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
//     Each calculation consist of exactly one operation and two numbers
//     The most outer function represents the left operand, the most inner function represents the right operand
//     Division should be integer division. For example, this should return 2, not 2.666666...:

// eight(dividedBy(three()));

function zero(operator) {
  const val = 0
  if(operator){
    return Math.floor(eval(val + operator))
  } else { return (val)}
  
}
function one(operator) {
  const val = 1
  if(operator){
    return Math.floor(eval(val + operator))
  } else { return (val)}
}

function two(operator) {
  const val = 2
  if(operator){
    return Math.floor(eval(val + operator))
  } else { return (val)}
}
function three(operator) {
  const val = 3
  if(operator){
    return Math.floor(eval(val + operator))
  } else { return (val)}
}
function four(operator) {
  const val = 4
  if(operator){
    return Math.floor(eval(val + operator))
  } else { return (val)}
}
function five(operator) {
  const val = 5
  if(operator){
    return Math.floor(eval(val + operator))
  } else { return (val)}
}
function six(operator) {
  const val = 6
  if(operator){
    return Math.floor(eval(val + operator))
  } else { return (val)}
}
function seven(operator) {
  const val = 7
  if(operator){
    return Math.floor(eval(val + operator))
  } else { return (val)}
}
function eight(operator) {
  const val = 8
  if(operator){
    return Math.floor(eval(val + operator))
  } else { return (val)}
}
function nine(operator) {
  const val = 9
  if(operator){
    return Math.floor(eval(val + operator))
  } else { return (val)}
}

function plus(num) {
  val ="+"
  return val + num
}
function minus(num) {
  val ="-"
  return val + num
}
function times(num) {
  val ="*"
  return val + num
}
function dividedBy(num) {
  val ="/"
  return val + num
}

console.log(eight(dividedBy(three())))