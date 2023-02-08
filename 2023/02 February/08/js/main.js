function lowercaseCount(str){
  const strArr = str.match(/[a-z]/g)
  return strArr? strArr.length : 0
}


