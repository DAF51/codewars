// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or s

function getCount(str) {
  let vowelsCount = 0;
  let vowelArray = ["a","e","i","o","u"]
  
  let stringArray = str.toLowerCase().split("")
  stringArray.forEach(letter => {
    console.log(letter)
    if(vowelArray.includes(letter)){
      vowelsCount++
    }
  })
  
  return vowelsCount;
}
