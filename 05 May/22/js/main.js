// There is a queue for the self-checkout tills at the supermarket. Your task is write a 
// function to calculate the total time required for all the customers to check out!
// input

//     customers: an array of positive integers representing the queue. Each integer represents 
//     a customer, and its value is the amount of time they require to check out.
//     n: a positive integer, the number of checkout tills.

// output

// The function should return an integer, the total time required.
// Important

// Please look at the examples and clarifications below, to ensure you 
// understand the task correctly :)

// Examples

// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the 
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12

// Clarifications

//     There is only ONE queue serving many tills, and
//     The order of the queue NEVER changes, and
//     The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.

// N.B. You should assume that all the test input will be valid, as specified above.

function queueTime(customers, n) {
  //make n till objects that contain a customer timer, then for each customer in the array, cycle through
  //the till objects and add the customer to the shortest one. Of those, the one that then gets returned is
  //the longest one
  class Till {
    constructor(tillName){
      this.tillName = tillName
      this.customers = [0]
    }

    addCustomer(customer){
      this.customers.push(customer)
      console.log(`Added ${customer} to the list`)
    }
  }

  let tills =[]

  //creates an array of n tills
  for(let i = 1; i<=n; i++){
    tills.push(`till${i}`)
  }

  //uses the tillArray to create n till objects
  let tillsArray = tills.map(currentTill => {
    return currentTill = new Till(currentTill)
  })


  //This creates an array of tills that's sorted in acending order, based off how much time each customer is at the till
  //Further refactoring:This entire sort section should be its own separate function. 
  let tillsArraySorted = tillsArray.sort((a,b) => a.customers.reduce((a,b) => a+b,0) - b.customers.reduce((a,b) => a+b,0))

  //This loop adds a customer to the shortest till and then resorts the list
  customers.forEach(currentCust => {
    tillsArraySorted[0].customers.push(currentCust)
    tillsArraySorted = tillsArray.sort((a,b) => a.customers.reduce((a,b) => a+b,0) - b.customers.reduce((a,b) => a+b,0))
  })
 
  //Since tillsArraySorted is in acending order, the last value of the array is the longest till time, which is 
  //the total amount of time that will be taken by the whole list of customers 
  return tillsArraySorted[tillsArraySorted.length-1].customers.reduce((a,b) => a+b,0)


}

