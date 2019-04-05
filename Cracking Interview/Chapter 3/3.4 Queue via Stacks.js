/*
3.4 Queue via Stacks
Implement a MyQueue class which implements a queue using two stacks.

Methods:
add(item)
remove()
peek(): the top
isEmpty()

Note: 'StackNewest' has the newest elements on top and 'StackOldest' has the oldest elements on top. When we dequeue an 
element,stackOldest.pop().If stackOldest is empty, then we transfer all elements from stackNewest into this stack in reversed
order. To insert an element, stackNewest.push(), since it has the newest elements on top.
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

class MyQueue {
  constructor() {
    this.new = new Stack();
    this.old = new Stack();
  }
  
  isEmpty() {
    return this.new.isEmpty && this.old.isEmpty;
  }
  
  add(item) {
    this.new.push(item);
  }
  
  shiftStacks() {
    if (this.old.isEmpty()) {
      while(!this.new.isEmpty()) {
        this.old.push(this.new.pop());
      }
    }
  }
  
  remove() {
    this.shiftStacks();
    return this.old.pop();
  }
  
  peek() {
    this.shiftStacks();
    return this.old.peek();
  }  
}














