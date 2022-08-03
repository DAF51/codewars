// Task

// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. 
// Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
// Examples

// A size 3 diamond:

//  *
// ***
//  *

// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *

// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

function diamond(n){
  if (n%2 ===0 || n<0){
    return null;
  } else {
    let diam = ""
    let mid = Math.ceil(n/2)
    let ast = 1
    for(i=1; i<=n; i++){
      let space=""
      if(i === mid){
        space +=""
      } else {
        let distanceFromMid = Math.abs(i-mid)
        space += " ".repeat(distanceFromMid)
      }

      
      diam+=space+("*".repeat(ast))+"\n"
      i< mid? ast+=2: ast-=2
    }
    return diam;
  }
}

console.log(diamond(6))
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
   