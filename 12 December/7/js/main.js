// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string,
//  the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


function longest(s1, s2) {
  const comboStringArr = (s1+s2).split("")
  console.log(comboStringArr)
  const set= new Set(comboStringArr)
  return Array.from(set).sort().join("")
}


a = "aretheyhere"
b = "yestheyarehere"
console.log(longest(a,b))