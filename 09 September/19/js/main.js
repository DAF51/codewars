// Complete the function that receives as input a string, and produces outputs 
// according to the following table:
// Input 	Output
// "Jabroni" 	"Patron Tequila"
// "School Counselor" 	"Anything with Alcohol"
// "Programmer" 	"Hipster Craft Beer"
// "Bike Gang Member" 	"Moonshine"
// "Politician" 	"Your tax dollars"
// "Rapper" 	"Cristal"
// anything else 	"Beer"

// Note: anything else is the default case: if the input to the function is 
// not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct 
// capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".


function getDrinkByProfession(param){
  paramNorm = param.toLowerCase()
  if(paramNorm === "jabroni"){
    return "Patron Tequila"
  } else if(paramNorm === "school counselor"){
    return "Anything with Alcohol"
  } else if(paramNorm === "programmer"){
    return "Hipster Craft Beer"
  }else if(paramNorm === "bike gang member"){
    return "Moonshine"
  }else if(paramNorm === "politician"){
    return "Your tax dollars"
  }else if(paramNorm === "rapper"){
    return "Cristal"
  }else{
    return "Beer"
  }
}