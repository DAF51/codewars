// We want to know the index of the vowels in a given word, for example, there are two vowels in 
// the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]

function vowelIndices(word){
  const vowels = ["a","e","i","o","u","y"]
  const index = []
  word.split("").forEach((val,ind)=>{
    if(vowels.includes(val.toLowerCase())){
      index.push(ind+1)
    }
  })
  return index
}

