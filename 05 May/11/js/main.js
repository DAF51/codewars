// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// NOTE: All numbers will be whole numbers greater than 0.


function expandedForm(num) {
  let numArray = String(num).split("")
  let expandedNum = ""

  numArray.forEach((currentNum, i) => {
      if(Number(currentNum) > 0){
        let expN = currentNum.padEnd(numArray.length-i, 0)
        expandedNum += `${expN} + `
      }
  })

  expandedNum = expandedNum.slice(0,expandedNum.length-3)

  return expandedNum
}


console.log(expandedForm(12))