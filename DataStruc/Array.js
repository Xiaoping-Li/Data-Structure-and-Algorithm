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
  }

  insert(idx, ele) {

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
