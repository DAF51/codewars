// Write a function that takes a single string (word) as argument. The function
//  must return an ordered list containing the indexes of all capital letters in
//   the string.
// Example

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );


const capitals = function (word) {
	let caps = []
  const wordArr = word.split("")
  wordArr.forEach((val,ind) =>{ 
    if(val ===val.toUpperCase()){
      caps.push(ind)
    }
})
return caps
  
};

