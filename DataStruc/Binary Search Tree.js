// Define "Node" class
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

// Define Binary-Search-Tree Class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
       this.root = newNode;
    } else {
      if (value > this.root.data) {
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
    return this.root;
  }
  
  // inOrderTraversal() {}
  
  // preOrderTraversal() {}
  
  // postOrderTraversal() {}
}
