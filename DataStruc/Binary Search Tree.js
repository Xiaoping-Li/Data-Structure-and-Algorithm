// Define Binary-Search-Tree Class
class BinarySearchTree {
  constructor() {
    this.data = null;
    this.left = null;
    this.right = null;
  }
  
  insert(value) {
    const newNode = new BinarySearchTree(value);
    if (!this.data) {
       this.data = value;
    } else {
      if (value > this.data) {
        if (!this.right) {
          this.right = newNode;
        } else {
          this.right.insert(value);
        }
      } else {
        if (!this.left) {
          this.left = newNode;
        } else {
          this.left.insert(value)
        }
      }
    }
    return this;
  }
  
  // inOrderTraversal() {}
  
  // preOrderTraversal() {}
  
  // postOrderTraversal() {}
}
