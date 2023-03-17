// You'll be given a string, and have to return the sum of all characters as an int. 
// The function should be able to handle all printable ASCII characters.

// Examples:

// uniTotal("a") == 97
// uniTotal("aaa") == 291


function uniTotal (string) {
  let total =0

  for(let val of string){
    total+= val.charCodeAt(0)
  }
    return total
  }

  console.log(uniTotal("a"))