/*
Binary Heap
1). The root element will be at Arr[0].
2). Below table shows indexes of other nodes for the ith node, i.e., Arr[i]:
      Arr[Math.floor((i-1)/2)]	Returns the parent node
      Arr[(2*i)+1]	Returns the left child node
      Arr[(2*i)+2]	Returns the right child node
      
A heap is a useful and efficient way to store and look up data that must maintain order. The classic example is a priority 
queue abstract data type. A priority queue is a set of data where higher or lower valued data points bubble to the front of the
queue and are therefore accessed first. 
*/
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(key) {
    this.heap.push(key);
    let i = this.heap.length - 1;
    let parent = this.heap[Math.floor((i-1)/2)];
    while (parent && key < parent) {
      this.heap[i] = parent;
      this.heap[Math.floor((i-1)/2)] = key;
      i = Math.floor((i-1)/2);
      parent = this.heap[Math.floor((i-1)/2)];
    }
    return key;
  }
      
  extractMin() {
    if (this.heap.length < 3) {
      return this.heap.shift();
    }

    // Remove min from this.heap[0];
    const min = this.heap.shift();
    // Move the last one to the head this.heap[0]
    this.heap.unshift(this.heap.pop());
    // Compare the new head with it's left and right children, until find the correct place for this new head
    let i = 0;
    const newHead = this.heap[0];
    let leftChild = this.heap[2 * i + 1];
    let rightChild = this.heap[2 * i + 2];
    while((leftChild || rightChild) && (newHead > leftChild || newHead > rightChild)) {
      if (leftChild < rightChild) {
        this.heap[i] = this.heap[2 * i + 1];
        this.heap[2 * i + 1] = newHead;
        i = 2 * i + 1;
        leftChild = this.heap[2 * i + 1];
        rightChild = this.heap[2 * i + 2];
      } else {
        this.heap[i] = this.heap[2 * i + 2];
        this.heap[2 * i + 2] = newHead;
        i = 2 * i + 2;
        leftChild = this.heap[2 * i + 1];
        rightChild = this.heap[2 * i + 2];
      }
    }
    return min;
  }

}
