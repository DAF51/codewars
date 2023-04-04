//To avoid pollution of the global scope, you might want to encapuslate this.

const memo = {}
function fib(n,cache){
  result = 1
  if(n ===0|| n===1){
    return result = n
  } else if(cache[n]){
    result = cache[n]
  } else {
    result = fib(n-1, cache)+fib(n-2,cache)
    cache[n] = result
  }

  return result
}


console.log(fib(100,memo))