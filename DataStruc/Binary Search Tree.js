// Define Binary-Search-Tree Class
class BST {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
  
  insert(val) {
    const newBST = new BST(val);
    if (val < this.value) {
      if (!this.left) {
        this.left = newBST;
      } else {
        this.left.insert(val);
      }
    } else {
      if (!this.right) {
        this.right = newBST;
      } else {
        this.right.insert(val);
      }
    }
  }

  search(val) {
    if (val < this.value && this.left) return this.left.search(val);
    if (val > this.value && this.right) return this.right.search(val);
    return val === this.value;
  }

}
    

