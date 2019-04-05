/*
Queue: first-in-first-out. Element is added to the end, and removed from the head.
Using array: enqueue --> O(1); dequeue --> O(n)
Using linked list: enqueue --> O(n); dequeue --> O(1)

Note: One place where queues are often used is in breadth-first search or in implementing a cache.
*/

function Node(val) {
  this.value = val;
  this.next = null;
};

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  add(item) {
    const newNode = new Node(item);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this.head;
  }
  
  remove() {
    if (!this.head) return 'Empty Queue';
    const removeItem = this.head.value;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    return removeItem;
  }
  
  // Return the top of the queue
  peek() {
    if (!this.head) return 'Empty Queue';
    return this.head.value;
  }
  
  isEmpty() {
    return !this.head;
  }
}
