/*
2.1 Remove Dups
Write code to remove duplicates from an unsorted linked list.
How would you solve this problem if a temporary buffer (additional buffer/memory/space) is not allowed?
*/

const Node = val => {
  this.value = val;
  this.next = null;
};

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  append = val => {
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
  
  removeDup = () => {
    if (!this.head) return;
    if (!this.head.next) return this.head;
    
    let p1 = this.head;
    while (p1.next) {
      let pre = p1;
      let p2 = p1.next;
      while (p2) {
        if (p2.value === p1.value) {
          if (p2.next) {
            pre.next = p2.next;
            p2 = p2.next;
          } else {
            pre.next = null;
            p2 = p2.next;
          }
        } else {
          if (p2.next) {
            p2 = p2.next;
            pre = pre.next;
          } else {
            p2 = p2.next;
          }
        }
      }
      p1 = p1.next;
    }
    return this.head;
  }
}
