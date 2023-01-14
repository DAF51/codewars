// Two red beads are placed between every two blue beads. 
// There are N blue beads. After looking at the arrangement below work 
// out the number of red beads.

// Implement count_red_beads(n) (in PHP count_red_beads($n); in Java,
//  Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the 
//  number of red beads.

// If there are less than 2 blue beads return 0. 

// brrbrrbrrbrrbrrb

// brrbrrbrrbrrb

function countRedBeads(n) {
if(n < 2) {
  return 0
}
 beads= []
 for(let i = 0; i <= n; i++){
  if(i < n-1){
    beads.push("b")
    beads.push("r")
    beads.push("r")
  } else if (i === n){
    beads.push("b")
  }
 }


 const beadCount = {}
 for(let bead of beads){
  beadCount[bead] = beadCount[bead] +1 || 1
 }
 
 return beadCount["r"]
}

console.log(countRedBeads(5))