// Definition

// A number is called Automorphic number if and only if its square ends in the same 
// digits as the number itself.
function automorphic(n){
  const square =(n**2).toString()
  return square.endsWith(n.toString())?"Automorphic":"Not!!"
}

