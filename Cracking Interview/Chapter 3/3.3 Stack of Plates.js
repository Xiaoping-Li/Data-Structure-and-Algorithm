/*
3.3 Stack of Plates
Imagine a stack of plates. If the stack gets too high, it might topple. Therefore, in real life, we would likely start a new
stack when the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks
should be composed of several stacks and should create a new stack once the previous one exceeds capacity. SetOfStacks.push()
and SetOfStacks.pop() should behave identically to a single stack (that is, pop() should return the same values as it would if
there were just a single stack).

Follow up:
Implement a function popAt(idx) which performs a pop operation on a specific sub-stack.
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

class SetOfStacks {
  constructor(n) {
    this.storage = [];
    this.size = n;
  }
  
  push(item) {
    const lastStack = this.storage[this.storage.length - 1];
    if (lastStack && lastStack.length < this.size) {
      lastStack.push(item);
    } else {
      const newStack = new Stack();
      newStack.push(item);
      this.storage.push(newStack);
    }
  }
  
  pop() {
    if (!this.storage.length) return 'Empty Stack';
    let lastStack = this.storage[this.storage.length - 1];
    if (lastStack.length > 0) {
      return lastStack.pop();
    } else {
      this.storage.pop();
      lastStack = this.storage[this.storage.length - 1];
      return lastStack.pop();
    }
  }
  
  popAt(idx) {
    
  }
}











