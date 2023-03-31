// Given a magazine of words and a ransom note, determine if it’s possible 
// to “cut out” and create the ransom note from the magazine words.

// const magazine =
//  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
//  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
//  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
//   dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
//   Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
//    anim id est laborum";

// describe("Ransom Note", () => {
//  it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est love", magazine), false);
//  });

// it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint in in", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
//  });
// });

function ransomNote(note, mag){
  const magObj = {}
  const ransomObj = {}
  let canCreate= true
  for(const word of mag.split(" ")){
    magObj[word] = magObj[word]+1 ||1
  }

  for(const word of note.split(" ")){
    ransomObj[word] = ransomObj[word]+1 ||1
  }

  for(let word in ransomObj){
    //leon's solution involves decramenting the magObj[word] every time it's found
    //If it goes below zero, then canCreate is set to false, but that solution involves 
    //nested ifs
    if(!magObj[word] || ransomObj[word] > magObj[word]){
      canCreate =false
    }
  }

  return canCreate
}

const magazine ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

console.log(ransomNote("sit ad est sint",magazine))
console.log(ransomNote("sit ad est love",magazine))
console.log(ransomNote("sit ad est sint in in",magazine))
console.log(ransomNote("sit ad est sint in in in in",magazine))