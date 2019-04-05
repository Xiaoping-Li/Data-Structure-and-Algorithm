/*
3.1 Three in One
Describe how you could use a single array to implement three stack.
Note: This one depends on how well we'd like to support these stacks. If we're okay with simply allocating a fixed amount of 
space for each stack, we can do that. This may mean though that one stack runs out of space, while the others are nearly empty.
*/
function Stack(stackNum, size) {
  this.stackNum = stackNum;
  this.top_idx = (this.stackNum - 1) * size;
};


class FixedMultiStack {
  constructor(stackSize) {
    this.stackSize = stackSize;
    this.storage = [];
  }
  
  createStack(stackNum) {
    return new Stack(stackNum, this.stackSize);
  }
  
  push(item, stackNum) {
    
  }
  
  
  
}


class MultiStack {
  
}
