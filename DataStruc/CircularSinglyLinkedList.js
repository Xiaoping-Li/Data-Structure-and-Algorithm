/*
Circular linked list: is a linked list where all nodes are connected to form a circle. There is no NULL at the end. A circular 
linked list can be a singly circular linked list or doubly circular linked list.

Advantages of Circular Linked Lists:
1) Any node can be a starting point. We can traverse the whole list by starting from any point. We just need to stop when the 
first visited node is visited again.

2) Useful for implementation of queue. Unlike this (https://www.geeksforgeeks.org/queue-set-2-linked-list-implementation/) implementation, we don’t need to maintain two pointers for front and rear 
if we use circular linked list. We can maintain a pointer to the last inserted node and front can always be obtained as next of last.

3) Circular lists are useful in applications to repeatedly go around the list. For example, when multiple applications are 
running on a PC, it is common for the operating system to put the running applications on a list and then to cycle through them, giving each of them a slice of time to execute, and then making them wait while the CPU is given to another application. It is convenient for the operating system to use a circular list so that when it reaches the end of the list it can cycle around to the front of the list.

4) Circular Doubly Linked Lists are used for implementation of advanced data structures like Fibonacci Heap.

Implement:
In a conventional linked list, we traverse the list from the head node and stop the traversal when we reach NULL. In a circular
linked list, we stop traversal when we reach the first node again.
*/

const Node = value => {
  value,
  next: null,   
};
  
class CircularSingleLinkedList {
  constructor() {
    this.head = null;
    this._length = 0;
  }
  
  get size() {
    return this._length;
  }
  
  insert(items, i) {
    if (i < 0 || i > this._length - 1) return 'Invalid i';
    const firstNode = new Node(items[0]);
    
    // Insert items at index 0 for an empty circular single linked list
    if (!this._length && i === 0) {
      this.head = firstNode;
      let current = this.head;
      for (let i = 1; i < items.length; i++) {
        let newNode = new Node(items[i]);
        current.next = newNode;
        current = current.next;
      }
      current.next = this.head;
      this._length += items.length;
    }
    
    // Insert items at index 0 for a nonempty circular single linked list
    if (this.head && i === 0) {
      let preHead = this.head;
      while(preHead.next !== this.head) { //The condition here maybe not right
        preHead = preHead.next;
      }
      for (let i = 0; i < items.length; i++) {
        let newNode = new Node(items[i]);
        preHead.next = newNode;
        preHead = preHead.next;
      }
      preHead.next = this.head;
      this._length += items.length; 
    }
    
    // Insert items at any index except 0 for a nonempty circular single linked list 
    let j = 0;
    let prei = this.head;
    let afteri;
    while(j < i - 1) {
      prei = prei.next;
      j++;
    }
    afteri = prei.next;
    for (let i = 0; i < items.length; i++) {
        let newNode = new Node(items[i]);
        prei.next = newNode;
        prei = prei.next;
    }
    prei.next = afteri;
    this._length += items.length;
  }
  
};
