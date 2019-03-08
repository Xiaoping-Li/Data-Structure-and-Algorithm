// Define Binary-Search-Tree Class
class BinarySearchTree {
  constructor(data) {
    this.data = data;
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
  
  
  inOrderTraversal() {
    if (!this.data) return;

    // Left first
    if (this.left) {
      this.left.inOrderTraversal();
    }

    // Then Middle
    console.log(this.data);

    // Right last
    if (this.right) {
      this.right.inOrderTraversal();
    }
  }
  
  // preOrderTraversal() {}
  
  // postOrderTraversal() {}
}

const myBT = new BinarySearchTree();
myBT.insert(4);
myBT.insert(5);
myBT.insert(2);
myBT.insert(1);
myBT.insert(3);
myBT.inOrderTraversal(); // 1 2 3 4 5

