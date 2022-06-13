// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying 
// each of the following phrases each time a petal was torn:

//     I love you
//     a little
//     a lot
//     passionately
//     madly
//     not at all

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given 
// number of petals, where nb_petals > 0.

function howMuchILoveYou(nbPetals) {
let cycles = Math.floor(nbPetals/6)
let adjust = cycles*6;
let truePetals = nbPetals - adjust

console.log(cycles)
console.log(truePetals)


function petalCheck(petals){
  switch(petals){
    case 0:
      return "not at all"
  
    case 1:
      return "I love you"

    case 2:
      return "a little"

    case 3:
      return "a lot"

    case 4:
      return "passionately"

    case 5:
      return "madly"

    case 6:
      return "not at all"
  }
}

if(nbPetals > 6){
  return petalCheck(truePetals)
} else {
  return petalCheck(nbPetals)
}

}


//the actual answer to this was
// const phrases = [
//   'I love you',
//   'a little',
//   'a lot',
//   'passionately',
//   'madly',
//   'not at all',
// ]

// function howMuchILoveYou(n) {
//   return phrases[(n - 1) % phrases.length] 
// }

