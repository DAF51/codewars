// Given a string made up of letters a, b, and/or c, switch the position of letters a and b 
// (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x){
  return x.split("").map(val => {
    switch(val){
      case "a":
        return "b"
      case "b":
        return "a"
      case "c":
        return "c"
    }
  }).join("")
}