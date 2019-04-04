/*
2.4 Partition
Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or
equal to x. If x is contained within the list, the values of x only need to be after the elements less than x. The partition
element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions.
Example:
Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1  [partiton = 5]
Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
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
  
  partition(num) {
    if (!this.head || !this.head.next) return false;

    let current = this.head;
    let prev = null;
    while (current.next) {
      if (current.next.value < num) {
        let lessNode = current.next;
        // Reset the connections between current and current.next.next
        current.next = current.next.next;
        prev = current;
        current = current.next; 
        
        // Move lessNode to the head
        lessNode.next = this.head;
        this.head = lessNode;  
      } else {
        prev = current;
        current = current.next;
      }
    }
    
    if (current.value < num) {
      current.next = this.head;
      this.head = current;
      prev.next = null;
      return this.head;
    } else {
      return this.head;
    } 
  }
  
}
