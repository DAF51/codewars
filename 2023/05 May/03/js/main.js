// Given the head of a singly linked list,
//  reverse the list, and return the reversed list.

class Node{
  constructor(val){
    this.val = val
    this.next = null
  }

}

class SinglyLinkedList{
    constructor(){
      this.head = null
      this.tail = null
      this.length = 0
    }

    //add to the end of the list
    append(val){
      //if the list is empty
      const curNode = new Node(val)
    
      if(!this.tail){
        this.head = this.tail = curNode
      } else {
        let oldTail = this.tail
        this.tail = curNode
        oldTail.next = curNode
      }
    }

    //add to the beginning of the list
    prepend(val){
      const curNode = new Node(val)
      if(!this.head){
        this.head = this.tail = curNode
      } else {
        const oldHead = this.head
        this.head = curNode
        this.head.next = oldHead
      }
    }

    //Leon's answer
    reverseList(){
      let current = this.head
      let prev = null
      while(current){
        const temp = current.next
        current.next = prev
        prev = current
        current = temp
      }
      return prev
    }
}

const list = new SinglyLinkedList
list.append("Seven")
list.append("Shadows")
list.append("Cast")
list.append("Seven")
list.append("Fates")

// console.log(list)

function revLink(head){
  const revList = new SinglyLinkedList
  let currentNode = head
  while(currentNode){
    revList.prepend(currentNode.val)
    currentNode = currentNode.next

  }
  return revList
}

console.log(revLink(list.head))


