/*
3.2 Stack Min
In addition to push and pop, has a function 'min' which returns the minimum element? Push, pop and min should all operate in 
O(1) time.
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

class StackWithMin extends Stack {
  constructor() {
    super();
    this.mins = new Stack();
  }
  
  push (value) {
    if (value <= this.min()) this.mins.push(value);
    super.push(value); // Use 'super' to call parents' push method 
  }
  
  pop() {
    if (this.isEmpty()) return 'Empty Stack';
    const popItem = super.pop(); // Use 'super' to call parents' push method
    if (popItem === this.min()) this.mins.pop();
    return popItem;
  }
  
  min() {
    if (this.mins.isEmpty()) return Number.POSITIVE_INFINITY;
    return this.mins.peek();
  }
}
