// Task:

// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

// Rules:

//     You need to round the answer to 2 decimal places and return it as String.

//     If the given value is 0 then it should return 0.00

//     You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)

// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"


//This sequence is 1/1+ 1/(1+3)+ 1/(4+3)...
function SeriesSum(n){
  let denom = 1
  let val = 1

  if(n === 0){
    return "0.00"
  }else {
  for(let i= 1; i<n; i++){
    if(val !== 1){
    console.log("Made it here")
    val= val+(1/denom)
    denom= denom+=3
    } else {
      val =val +=1/4
      denom = denom+=6
    }
  }
}

  val = val.toFixed(2)
  return val
}

console.log(SeriesSum(5))