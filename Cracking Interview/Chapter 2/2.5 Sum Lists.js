/*
2.5 Sum Lists
You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse 
order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a 
linked list.
Example:
Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). 
Output: 2 -> 1 -> 9

Follow up:
Suppose the digits are stored in forward order. Repeat the above problem.
Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). 
Output: 9 -> 1 -> 2
*/

// Node constructor function
function Node(val) {
  this.value = val;
  this.next = null;
};

// LinkedList function
class LinkedList {
  constructor() {
    this.head = null;
  }
  
  append(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      return this.head;
    }
    
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = newNode;
    return this.head;
  }  
}

// Reverse number list
// 1. Make add changes on the longer list, and return the longer list
const sumLists = (list1, list2) => {
  // Find the longer one between list1 and list2, return the longer one as result
  let long, short, n = 0, m = 0;
  let current1 = list1.head;
  let current2 = list2.head;
  while(current1) {
    current1 = current1.next;
    n++;
  }
  while(current2) {
    current2 = current2.next;
    m++;
  }
  
  if (n >= m) {
    long = list1;
    short = list2;
  } else {
    long = list2;
    short = list1;
  }
  
  // Initiate current1 and current2, loop through Long list and short list, and add digits on the long list
  current1 = long.head;
  current2 = short.head;
  
  while (current2) {
    if (current1.value + current2.value < 10) {
      current1.value = current1.value + current2.value;
    } else {
      if (current1.next) {
        current1.value = current1.value + current2.value - 10;
        current1.next.value++;
      } else {
        current1.value = current1.value + current2.value - 10;
        let newNode = new Node(1);
        current1.next = newNode;
      }
    }
  }
  return long; 
}









