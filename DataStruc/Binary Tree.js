class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(val) {
    const newTree = new BinaryTree(val);
    if (!this.left) {
      this.left = newTree;
    } else {
      this.left.insertLeft(val);
    }
  }

  insertRight(val) {
    const newTree = new BinaryTree(val);
    if (!this.right) {
      this.right = newTree;
    } else {
      this.right.insertRight(val);
    }
  }
  
  preOrderTraversal() {
    console.log(this.value);
    if (this.left) this.left.preOrder();
    if (this.right) this.right.preOrder();
  }
  
  inOrderTraversal() {
    if (this.left) this.left.inOrderTraversal();
    console.log(this.value);
    if (this.right) this.right.inOrderTraversal();
  }

  postOrderTraversal() {
    if (this.left) this.left.postOrderTraversal();
    if (this.right) this.right.postOrderTraversal();
    console.log(this.value);
  }
  
  BFSTraversal() {
    const queue = [];
    queue.push(this);
    while (queue.length) {
      let current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      console.log(current.value);
    }
  }
}
