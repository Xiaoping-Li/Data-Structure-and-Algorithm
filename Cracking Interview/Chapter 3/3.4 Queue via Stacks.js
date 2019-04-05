/*
3.4 Queue via Stacks
Implement a MyQueue class which implements a queue using two stacks.
*/

function StackNode(val) {
  this.value = val;
  this.next = null;
};

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  
  pop() {
    if(!this.top) return 'Empty stack';
    let popItem = this.top.value;
    this.top = this.top.next;
    this.length--;
    return popItem;
  }
  
  push(item) {
    const newNode = new StackNode(item);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return this.top;
  }
  
  peek() {
    if (!this.top) return 'Empty stack';
    return this.top.value;
  }
  
  isEmpty() {
    return !this.top
  }
}
