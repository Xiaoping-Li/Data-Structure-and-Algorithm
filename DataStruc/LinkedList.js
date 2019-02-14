/*
Linked List

*/

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
  
  insert(value, i) {
    if (i < 0 || i > this._length) return null;
    const newNode = {
      value,
      next: null,
    };
    
    if (!this.head && i === 0) {
      this.head = newNode;
      return newNode;
    }
        
    let j = 0; 
    let current = this.head;
    while (current) {
      if (j === i - 1) {
        let nextNode = current.next;
        current.next = newNode;
        newNode.next = nextNode;
        return newNode;
      } else {
        current = current.next;
        j++;
      }
    }
  }
  
  
}
