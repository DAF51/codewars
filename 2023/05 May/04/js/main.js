// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from 
// the root node down to the farthest leaf node.

// Example
// Input: root = [3,9,20,null,null,15,7]
// Output: 3


//  Definition for a binary tree node.
 function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {

  function buildTree(arr){
    let currentNode = new TreeNode(arr[0])
    arr.forEach((val,ind) => {
      
    })
  }

  buildTree(root)
    
};






//leon's answer
const maxDepthAlt = function(root){
  if(!root) return 0
  return Math.max(maxDepthAlt(root.left), maxDepthAlt(root.right))+ 1
}

console.log(maxDepthAlt([3,9,20,null,null,15,7]))

//My answer
// const maxDepth(root){
//   if(!root) return 0
// }