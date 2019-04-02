/*
2.2 Return Kth to Last
Implement an algorithm to find the kth to last element of a singly linked list.

Ask questions:
1. kth is 0 base or 1 base?
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
  
  // Non-recursively
  kthToLast (k) {
    if (!this.head) return false;
    let i = 0;
    let current = this.head;
    while (current) {
      if (i === k) return current;
      current = current.next;
      i++;
    }
    return false;
  }
  
  // Recursively
  kthToLast (k) {
    let current = this.head;
    if (k === 0) return current;
    
    // Out of bind
    if (!current.next) return false;
    // Create a new Linked List, and its head point to current.next
    let newList = new LinkedList();
    newList.head = current.next
    return newList.kthToLast(k - 1);
  }
}
