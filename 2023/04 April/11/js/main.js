// Given the head of a linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.


class Node {
  constructor(value, next, prev){
    this.value = value
    this.next = next || null
    this.prev= prev || null
  }
}

class LinkedList{
  constructor(){
    this.tail = null
    this.head = null
  }

  //Adds to the end of the list
  append(value) {
    if(!this.tail){
      //if there are no nodes in the list
      this.tail = this.head = new Node(value)
    } else {
      let oldTail = this.tail
      this.tail = new Node(value)
      oldTail.next = this.tail
      this.tail.prev = oldTail
    }
  }

  //adds to the beginning of the list
  prepend(node){
    if(!this.head){
      //if there are no nodes on the list
      this.head = this.tail= new Node(value)
    } else {
      let oldHead = this.head
      this.head = new Node(node)
      oldHead.prev = this.head
      this.head.next = oldHead
    }
  }

  deleteHead(){
    if(!this.head){
      return null
    } else {
      let removedHead = this.head
      if(this.head == this.tail){
        //if there are no other nodes in the list
        this.head = this.tail = null
      }else {
        this.head = this.head.next
        this.head.prev = null
      }

      return removedHead
    }
  }

  deleteTail(){
    if(!this.tail){
      return null
    } else {
      let removedTail = this.Tail
      if(this.head == this.tail){
        //if there are no other nodes in the list
        this.head = this.tail = null
      }else {
        this.Tail = this.Tail.prev
        this.Tail.next = null
      }

      return removedTail
    }
  }

  search(value){
    let currentNode = this.head
    while(currentNode){
      if (currentNode.value == value){
        return currentNode
      }
      currentNode = currentNode.next
    }
    return null
  }
}

const list = new LinkedList
list.append("Seven")
list.append("Shadows")
list.append("Cast")

const list2= new LinkedList
list2.append("1")
list2.append("2")
list2.append("3")
list2.append("4")

//these logs were done to figure out how to access the head
// console.log(`This is the list:`)
// console.log(list)
// let head = list.head
// console.log(`This is the head:`)
// console.log(head)


function retMiddle(head){
  let mid = head
  let end = head


  while(end.next != null){
    mid = mid.next
    if(end.next.next === null){
      return mid.value
    } else {
      end = end.next.next
    }
  }

  return mid.value
}

//leon's answer
function retMiddleAlt(head){
  slow = fast = head
  while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow
}

console.log(retMiddleAlt(list.head))
console.log(retMiddleAlt(list2.head))