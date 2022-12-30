// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries.
//  For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

//My solution

function removeDups(str){
  let strArr = str.split(" ")
  let newStr = ""
  strArr.forEach((word, ind)=> {
    if(word !==strArr[ind-1] && word!== strArr[ind+1]){
      newStr+=`${word} `
    }
  })
  return newStr.trimEnd()
}

//Actual solution
function removeDupsAlt(str){
  let strArr = str.split(" ")
  strArr.filter((word,ind) => word!==strArr[ind+1])
  console.log(strArr.join(" "))
}



console.log(removeDups("alpha beta gamma delta alpha beta gamma delta"))