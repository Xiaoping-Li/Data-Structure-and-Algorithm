/*
Stack: first-in-last-out. Element is added inorder, and is removed from the end. Could use array to implement
*/

class Stack {
  constructor() {
    this.list = [];
  }
  
  get size() {
    return this.list.length;
  }
  
  push(value) {
    this.list.push(value);
  }
  
  pop() {
    return this.list.pop();
  }
}
