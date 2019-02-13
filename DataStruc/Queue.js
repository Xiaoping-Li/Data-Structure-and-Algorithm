/*
Queue: first-in-first-out. Element is added to the end, and removed from the head.
Using array: enqueue --> O(1); dequeue --> O(n)
Using linked list: enqueue --> O(n); dequeue --> O(1)
*/

class Queue {
  constructor() {
    this.head = null;
    this._length = 0;
  }
  
  get size() {
    return this._length;
  }
  
  enqueue(value) {
    const newNode = {
      value,
      next: null
    };
    
    if (!this.head) {
      this.head = newNode;
      this._length++;
      return newNode.value;
    }
    
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = newNode;
    this._length++;
    return newNode.value;
  }
  
  dequeue() {
    if (!this.head) return null;
    
    let current = this.head;
    this.head = current.next;
    this._length--;
    return current.value;
  }
}
