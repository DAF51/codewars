// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.


// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
 

// Constraints:

// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order


//--------------------My solution----------------------------------------------
//This works, but it's not quite O(log n) It's also not a binary search o.......o
// They did not want a tree :/
// class Node{
//   constructor(val, ind){
//     this.val = val
//     this.ind = ind
//     this.left = null
//     this.right = null
//   }
// }

// class Tree{
//   constructor(head){
//     this.head = head
//   }

//   insert(node){
//     const currentNode = this.head
//     function checkTree(currentNode){
//       if(node.val > currentNode.val){
//         if(currentNode.right === null){
//           currentNode.right = node
//         } else if(currentNode){
//           checkTree(currentNode.right)
//         }
//       } else if(node.val < currentNode.val){
//         if(currentNode.left === null){
//           currentNode.left = node
//         } else if(currentNode){
//           checkTree(currentNode.left)
//         }
//       }
//     }
//     checkTree(currentNode)
//   }

//   search(num){
//       const currentNode = this.head
//       let result = -1
//       function searchTree(currentNode){
//         console.log(currentNode)
//         if(num === currentNode.val){
//           return result = currentNode.ind
//         } else if(num > currentNode.val && currentNode.right){
//           console.log("Made it to greater")
//           currentNode = currentNode.right
//           searchTree(currentNode)
//         } else if (num < currentNode.val && currentNode.left){
//           currentNode = currentNode.left
//           searchTree(currentNode)
//         } else {
//           console.log("Made it to null")
//           return
//         }
//     }
//     searchTree(currentNode)
//     return result
//   }
  
// }


// function buildTree(arr){
//   const first = new Node(arr[0], 0)
//   const tree = new Tree(first)
//   arr.forEach((val, ind) => {
//     if(ind > 0){
//       const currentNode = new Node(val, ind)
//       tree.insert(currentNode)
//     }
//   })
//   return tree
// }


// function search(arr, target){
//   const tree = buildTree(arr)
//   console.log(tree)
//   return tree.search(target)
// }

// console.log(search([-1,0,3,5,9,12], 2))

//============================================================================

//My solution 2=================================================================
//This is an actual binary search
function search(arr, target){
  let low = 0
  let high = arr.length-1
  let midPoint = Math.round((arr.length-1)/2)
  let result = -1
  console.log(`The first midPoint is the index ${midPoint} with the value of ${arr[midPoint]}`)

  function midSearch(low, high, midPoint){
    console.log(`The current low is ${low}, the current high is ${high}, the current midpoint is ${midPoint}`)
    if(target === arr[midPoint]){
      return result = midPoint
    } else if(target > arr[midPoint] && low < high){
      low = midPoint+1
      midPoint = Math.round((high+low)/2)
      midSearch(low, high, midPoint)
    } else if(target < arr[midPoint] && high > low){
      console.log("We have entered the left Array")
      high = midPoint-1
      midPoint = Math.round((high+low)/2)
      midSearch(low, high, midPoint)
    } else {
      return
    }
  }

  midSearch(low, high, midPoint)
  return result
}


const arr =[-1,0,3,5,9,12]

console.log(search(arr, -1))

//==============================================================================

//Leon's solution

function binarySearch(nums, target){
  let low = 0, high = nums.length-1
  while(low < high){
    // This option can sometimes cause problems when dealing with really
    //big numbers, so high-low is recommended
    //let mid = Math.ceil((low+high)/2)
    let mid = low + Math.floor((high-low+1)/2)
    if (target < nums[mid]){
      high = mid -1
    } else {
      //You add +1 if you're using low+high
      //low = mid+1
      low = mid
    }
  }
  return nums[low] === target ? low: -1
}