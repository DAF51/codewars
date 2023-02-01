// Write a simple regex to validate a username. Allowed characters are:

//     lowercase letters,
//     numbers,
//     underscore

// Length should be between 4 and 16 characters (both included).

function validateUsr(username) {
  if(username.length > 16 || username.length <4){
    return false
  } else {
  res =  /^[a-z0-9_]*$/g.test(username)
  return res
  }
}

console.log(validateUsr("Hass"))