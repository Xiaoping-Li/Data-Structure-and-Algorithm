/*
Linked List

*/

// Helper function: insert array of items to the end of a node, and return the tail of this linked list
const insertArray = (node, array) => {
  for (let i = 0; i < array.length; i++) {
    let newNode = {
      value: array[i],
      next: null,
    };
    node.next = newNode;
    node = node.next;
  }
  return node;
};


class LinkedList {
  constructor() {
    this.head = null;
    this._length = 0;
  }
  
  isEmpty() {
    return !this._length ? true : false;
  }
  
  getElem(i) {
    if (i < 0 || i > this._length - 1) return 'Invalid i';
    let j = 0;
    let current = this.head;
    while (j < i) {
      current = current.next;
      j++;
    }
    return current.value;
  }
  
  contain(value) {
    if (!this.head) return false;
    let i = 0;
    let current = this.head;
    while (current) {
      if (current.value === value) return i;
      current = current.next;
      i++;
    }
    return false;
  }
  
  insert(array, i) {
    if (i < 0 || i > this._length) return 'Invalid i';

    const headNode = {
      value: array[0],
      next: null,
    };
    
    // Empty Linked List and add items to index 0
    if (!this.head && i === 0) {
      this.head = headNode;

      let current = this.head;
      let arraySlice = array.slice(1);
      insertArray(current, arraySlice);

      this._length += array.length;
      return this.head;
    }
    
    // Add items to the beginning of a nonempty Linked List
    if (this.head && i === 0) {
      let firstNode = this.head;
      this.head = headNode;

      let current = this.head;
      let arraySlice = array.slice(1);
      current = insertArray(current, arraySlice);
      current.next = firstNode;

      this._length += array.length;
      return this.head;
    }
    
    // Add items to a nonempty linked list from anywhere except the 0 index   
    let j = 0; 
    let current = this.head;
    while (current) {
      if (j === i - 1) {
        let nextNode = current.next;
        current = insertArray(current, array);
        current.next = nextNode;

        this._length += array.length;
        return this.head;
      } else {
        current = current.next;
        j++;
      }
    }
  } 
  
  removeItem(i) {
    if (i < 0 || i > this._length - 1) return 'Invalide index';
    
    
  }
       
}
