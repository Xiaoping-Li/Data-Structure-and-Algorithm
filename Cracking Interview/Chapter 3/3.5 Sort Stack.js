/*
3.5 Sort Stack
Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you
may not copy the elements into any other data structure (such as an array). The stack supports the following operations: push,
pop, peek, and isEmpty.
*/

function StackNode(val) {
  this.value = val;
  this.next = null;
};

class Stack {
  constructor() {
    this.top = null;
  }
  
  pop() {
    if(!this.top) return 'Empty stack';
    let popItem = this.top.value;
    this.top = this.top.next;
    return popItem;
  }
  
  push(item) {
    const newNode = new StackNode(item);
    newNode.next = this.top;
    this.top = newNode;
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

const sortStack = nums => {
  const storage = new Stack();
  while (!nums.isEmpty()) {
    let temp = nums.pop();
    if (storage.isEmpty()) {
      storage.push(temp);
    } else {
      if (temp >= storage.peek()) {
        storage.push(temp);
      } else {
        while (temp < storage.peek() && !storage.isEmpty()) {
          nums.push(storage.pop());
        }
        storage.push(temp);
      }
    }
  }
  
  while (!storage.isEmpty()) {
    nums.push(storage.pop());
  } 

  return nums;  
};
