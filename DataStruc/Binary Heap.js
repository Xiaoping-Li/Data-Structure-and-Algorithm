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

}
