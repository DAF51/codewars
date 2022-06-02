// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

//     Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
//     A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
//     Every smiling face must have a smiling mouth that should be marked with either ) or D

// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]
// Example

// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

// Note

// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). 
// Order of the face (eyes, nose, mouth) elements will always be the same.

//return the total number of smiling faces in the array
function countSmileys(arr) {
  const allowedEyes = [":",";"]
  const allowedNoses = ["-","~"]
  const allowedMouths = [")","D"]
  let totalFaces = 0

  arr.forEach(face => {
    let faceArray = face.split("")
    if(faceArray.length ===2){
      let eyes = false;
      let mouth = false;

      allowedEyes.includes(faceArray[0])? eyes = true : eyes = false;
      allowedMouths.includes(faceArray[1])? mouth = true : eyes = false;
      if(eyes && mouth){
        return totalFaces++
      }
    } else if(faceArray.length ===3){
      let eyes = false;
      let nose = false;
      let mouth = false;

      allowedEyes.includes(faceArray[0])? eyes = true : eyes = false;
      allowedNoses.includes(faceArray[1])? nose = true : nose = false;
      allowedMouths.includes(faceArray[2])? mouth = true : eyes = false;
      if(eyes && mouth && nose){
        return totalFaces++
      }
    }
    })
 
    return totalFaces
  }

