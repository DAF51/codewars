// Remove n exclamation marks in the sentence from left to right. 
// n is positive integer.

function remove(s,n){
  for(let i = 1; i<=n; i++){
    s=s.replace("!", "")
  }
  return s
}
