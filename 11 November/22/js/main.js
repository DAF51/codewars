// Selection Grid Layout in text:

// | Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
// | Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |

// Input

//     the list of game characters in a 2x6 grid;
//     the initial position of the selection cursor (top-left is (0,0));
//     a list of moves of the selection cursor (which are up, down, left, right);

// Output

//     the list of characters who have been hovered by the selection cursor 
//     after all the moves (ordered and with repetition, all the ones after 
//       a move, whether successful or not, see tests);

// Rules

// Selection cursor is circular horizontally but not vertically!

// As you might remember from the game, the selection cursor rotates 
// horizontally but not vertically; that means that if I'm in the leftmost
//  and I try to go left again I'll get to the rightmost (examples: from Ryu 
//   to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.

// Instead, if I try to go further up from the upmost or further down from 
// the downmost, I'll just stay where I am located (examples: you can't go 
// lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison 
// in the above image; you can't go upper than highest row: Ryu, E.Honda, Blanka,
//  Guile, Balrog and Vega in the above image).

// Test

// For this easy version the fighters grid layout and the initial position 
// will always be the same in all tests, only the list of moves change.

// Notice: changing some of the input data might not help you.

// Examples

//     fighters = [
//       ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//       ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
//     ]
//     initial_position = (0,0)
//     moves = ['up', 'left', 'right', 'left', 'left']

//     then I should get:

//     ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']

//     as the characters I've been hovering with the selection cursor during my moves. Notice: Ryu is the first just because it "fails" the first up See test cases for more examples.

//     fighters = [
//       ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//       ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
//     ]
//     initial_position = (0,0)
//     moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']

//     Result:

//     ['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']


function streetFighterSelection(fighters, position, moves){
  let currentPosition = position.slice()
  let currentChar = fighters[0][0]
  console.log(currentPosition)

  function logChar(currentPosition){
    currentChar= fighters[currentPosition[0]][currentPosition[1]]
    return currentChar
  }

  logChar(currentPosition)

  let hoveredChars = moves.map(move => {
    if(currentPosition[0] === 0&& move ==="down"){
      currentPosition[0]+=1
      return logChar(currentPosition)
    } else if(currentPosition[0] === 0&& move ==="up"){
      return currentChar
    }else if(currentPosition[0] === 1&& move ==="up"){
      currentPosition[0]-=1
      return logChar(currentPosition)
    }else if(currentPosition[0] === 1&& move ==="down"){
      return currentChar
    }else if(currentPosition[1] === 5&& move==="right"){
      currentPosition[1] = 0
      return logChar(currentPosition)
    } else if(currentPosition[1]=== 0&& move ==="left"){
      currentPosition[1] = 5
      return logChar(currentPosition)
    } else if(move === "left"){
      currentPosition[1]-=1
      return logChar(currentPosition)
    } else if(move ==="right"){
      currentPosition[1]+=1
      return logChar(currentPosition)
    }
  })

  return hoveredChars
}




fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]
initial_position = [0,4]
// moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']
// moves = ["up","left","right","left","down","right","left"]
moves = [ 'up', 'right', 'up', 'up', 'right' ]

console.log(streetFighterSelection(fighters, initial_position,moves))