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
  
  insert(array, i) {
    if (i < 0 || i > this._length) return 'Invalid i';

    const headNode = {
      value: array[0],
      next: null,
    };
    
    if (!this.head && i === 0) {
      this.head = headNode;
      let current = this.head;
      for (let i = 1; i < array.length; i++) {
        let newNode = {
          value: array[i],
          next: null,
        };
        current.next = newNode;
        current = current.next;
      }

      this._length += array.length;
      return this.head;
    }
        
    let j = 0; 
    let current = this.head;
    while (current) {
      if (j === i - 1) {
        let nextNode = current.next;
        for (let i = 0; i < array.length; i++) {
          let newNode = {
            value: array[i],
            next: null,
          };
          current.next = newNode;
          current = current.next; 
        }

        current.next = nextNode;

        this._length += array.length;
        return this.head;
      } else {
        current = current.next;
        j++;
      }
    }
  } 
  
  
}
