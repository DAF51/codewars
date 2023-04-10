// https://www.youtube.com/watch?v=1AJ4ldcH2t4
// Queues are linear collections of objects that can be inserted and removed
//  in a FIFO (first in, first out) manner.

// An example of a queue in real life and not strictly computing would simply be 
// the dreaded waiting line, i.e.the first person in line is also the first one who gets out. 

// Waiting Lines

// In this problem, we are going to be implementing our own enqueue, dequeue, and size methods for
//  the queue constructor we are creating, so we should be able to create new instances of the Queue.

// The enqueue method takes in the item as a parameter, while the dequeue method does not.
// The size method simply returns the number of items in the queue.

// Wait, what?
// To enqueue an item into the queue means to insert an item into the back, or tail, of the queue.
// To dequeue an item means means to remove the item at the front, or head, of the queue.
// In a queue, we remove the item the least recently added.
// JavaScript Methodology
// Queues can be implemented in JavaScript using arrays.

// You can use the built in push or unshift functions in order to add items to the queue 
// array as well as the shift or pop to remove them.

// As long as the tests pass, go for it!



// This is a non-array solution
class Queue{
  constructor(){
    this.storage = {}
    this.head =0
    this.tail =0
  }

  enqueue(ele){
    this.tail++
    this.storage[this.tail] = ele
  }

  dequeue(){
    if(test.tail > 0){
      let removed = this.storage[this.tail]

      delete this.storage[this.tail]
      this.head++
      this.tail--
      if(this.head >this.tail){
        this.head = this.tail
      }else {

      }
      return removed
    } else {
      return "The queue is empty"
    }
  }

  size(){
    return this.tail
  }

  peekTail() {
    return this.tail > 0? this.storage[this.tail]: "The Queue is empty"
  }

  peekHead() {
    return this.storage[this.head]
  }
}


//Leon's answer
class QueueAlt{
  constructor(){
    this.storage = {}
    this.head =0
    this.tail =0
  }

  enqueue(ele){
    this.tail++
    this.storage[this.tail] = ele
  }

  dequeue(){
      let removed = this.storage[this.tail]
      delete this.storage[this.tail]
      this.head++
  
  }

}




const test = new Queue
test.enqueue("Seven")
test.enqueue("Shadows")
test.enqueue("cast")
console.log(test.size())
console.log(test.peekTail())
console.log(test.peekHead())
