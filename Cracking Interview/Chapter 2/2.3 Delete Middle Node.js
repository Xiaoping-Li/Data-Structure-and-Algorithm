/*
2.3 Delete Middle Node
Implement an algorithm to delete a node in the middle (i.e., and node but the first and last node, not necessarily the exact 
middle) of a singly linked list, given only access to the node.
Example:
Input: the node c from the linked list a -> b -> c -> d -> e -> f
Output: nothing is returned, but the new linked list looks like: a -> b -> d -> e -> f

Note: In this problem, you are not given access to the head of the linked list. You only have access to that node.
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
  
  // Have the access to the head
  removeMiddle() {
    if (!this.head || !this.head.next || !this.head.next.next) return;
    let current = this.head;
    let count = 0;
    while (current) {
      current = current.next;
      count++;
    }
    
    current = this.head;
    for (let i = 0; i < Math.floor(count / 2) - 1; i++) {
      current = current.next;
    }
    
    current.next = current.next.next;
    return this.head;
  }
  
}
