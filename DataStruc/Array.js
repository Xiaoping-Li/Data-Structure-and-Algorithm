/**/
class myArray {
  constructor() {
    this._array = [];
    this._length = 0;
  }

  get size() {
    return this._length;
  }

  isEmpty() {
    return this._length === 0 ? true : false;
  }

  clearList() {
    this._array = [];
    this._length = 0;
  }

  insert(idx, ele) {
    if (idx < 0 || idx > this._length) {
      return this._length === 0 ? `List is empty` : `idx is invalid! Provide idx between 0 - ${this._length}`;
    }

    if (this._length === idx) {
      this._array[idx] = ele;
      this._length++;
      return this._array[idx];
    }
     
    let swapIdx = this._length - 1;
    while (swapIdx >= idx) {
      this._array[swapIdx + 1] = this._array[swapIdx];
      swapIdx--;
    }
    this._array[idx] = ele;
    this._length++;
    return this._array[idx];
  }

  getElem(idx) {
    if (idx < 0 || idx >= this._length) {
      return this._length === 0 ? `List is empty` : `idx is invalid! Provide idx between 0 - ${this._length - 1}`;
    }

    let rtn;
    for (let i = 0; i < this._length; i++) {
      if (i === idx) rtn = this._array[i];
      break;
    }
    return rtn;
  }

}

const newArray = new myArray();

newArray.insert(0, 'a');
newArray.insert(1, 'b');
newArray.insert(2, 'd');
newArray.insert(3, 'e');
newArray.insert(4, 'f');
newArray.insert(5, 'g');
console.log(newArray);
newArray.insert(2, 'c');
console.log(newArray);
