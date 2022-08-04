// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	let string =""
  let arr = s.split("")

  arr.forEach((val,ind) => {
    valNorm= val.toLowerCase();
    valString = valNorm.repeat(ind+1)
    if(ind != arr.length-1){
      string+= valString.charAt(0).toUpperCase()+valString.slice(1)+"-"
    } else {
      string+= valString.charAt(0).toUpperCase()+valString.slice(1)
    }
    
  })
  return string
}

