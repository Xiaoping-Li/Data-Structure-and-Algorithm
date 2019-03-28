# Trees and Graphs
## Types of Trees
A tree is a data structure composed of nodes.
* Each tree has a root node.
* The root node has zero or more child nodes.
* Each child node has zero or more child nodes, and so on.

**Note**: Other important concepts to understand are height and depth.
* The **height** of a `tree` is the length of the longest path to a `leaf`.
* The **depth** of a `node` is the length of the path to its `root`.

### Trees vs. Binary Trees
* Binary tree is a tree which each node has up to two children.
* Not all trees are binary trees.  
**leaf**: A node is called a "leaf" node if it has no children.

#### Implement Binary Trees
* The first thing we need to keep in mind when we _implement_ a `binary tree` is that it is a collection of `nodes`. Each `node` has three attributes: `value, left_child, and right_child`.
* Implement methods to insert a `new node` to the `right` and to the `left`. 
  * insert_left:
    * If the current node doesn’t have a `left child`, we just create a `new node` and set it to the current node’s `left_child`.
    * If it does have the `left child`, we create a `new node` and insert this new node to the correct left place recursivelly.
  * insert_right:
    * do the same thing to insert a `right child node`.
    
#### Tree Traversal
* **Depth-First Search (DFS)**: **DFS** explores a path all the way to a leaf before **backtracking** and exploring another path.

* **Breadth-First Search (BFS)**

```
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
}
```

### Binary Tree vs. Binary Search Tree
A `Binary search tree` is a _binary tree_ in which every node fits a specific ordering property: **all left descendents <= n < all right descendents**. This **must** be true for each node n.

### Balanced vs. Unbalanced
Note that balancing a tree **does not** mean the left and right subtrees are exactly the same size. Means the tree is **balanced enough** to ensure O(log n) times for _insert_ and _find_, but it's not necessarily as balanced as it could be.

Two common types of balanced trees are:
* Red-black trees
* AVL trees

### Complete Binary Trees
A `complete binary tree` is a binary tree in which every **level** of the tree is fully filled, except for perhaps the last level. To the extent that the last level is filled, it is filled **left to right**.

### Full Binary Trees
A `full binary tree` is a binary tree in which every node has either **zero or two children**. That is, no nodes have only one child.

### Perfect Binary Trees
A `perfect binary tree` is one that is both full and complete. All _leaf nodes_ will be at the same level, and this level has the maximum number of nodes.

**Note**: perfect trees are **rare** in interviews and in real life, as a perfect tree must have exactly 2^k - 1 nodes (k is the number of levels). In an interview, do not assume a binary tree is perfect.


## Binary Tree Traversal
* Breadth First Traversal (Or Level Order Traversal)
* Depth First Traversals
  * Inorder Traversal (Left-Root-Right)
  * Preorder Traversal (Root-Left-Right)
  * Postorder Traversal (Left-Right-Root)
  
### Breadth First Traversal (Or Level Order Traversal)

#### METHOD 1 (Use function to print a given level)
**Algorithm**:
There are basically two functions in this method. One is to print all nodes at a given level (printGivenLevel), and other is to print level order traversal of the tree (printLevelorder). printLevelorder makes use of printGivenLevel to print nodes at all levels one by one starting from root.
```
/*Function to print level order traversal of tree*/
printLevelorder(tree)
for d = 1 to height(tree)
   printGivenLevel(tree, d);

/*Function to print all nodes at a given level*/
printGivenLevel(tree, level)
if tree is NULL then return;
if level is 1, then
    print(tree->data);
else if level greater than 1, then
    printGivenLevel(tree->left, level-1);
    printGivenLevel(tree->right, level-1);
```

**Time Complexity**: O(n^2) in worst case. For a skewed tree, printGivenLevel() takes O(n) time where n is the number of nodes in the skewed tree. So time complexity of printLevelOrder() is O(n) + O(n-1) + O(n-2) + .. + O(1) which is O(n^2).

#### METHOD 2 (Use Queue)

**Algorithm**:
For each node, first the node is visited and then it’s child nodes are put in a FIFO queue.
```
printLevelorder(tree)
1) Create an empty queue q
2) temp_node = root /*start from root*/
3) Loop while temp_node is not NULL
    a) print temp_node->data.
    b) Enqueue temp_node’s children (first left then right children) to q
    c) Dequeue a node from q and assign it’s value to temp_node
```

**Time Complexity**: O(n) where n is number of nodes in the binary tree

### In-Order Traversal
`In-order traversal` means to _visit_ (often print) the left branch, then the current node, and finally, the right branch. 
```
left branch -----> current node -----> right branch
```
When performed on a binary search tree, it visits the nodes in **ascending** order.

### Pre-Order Traversal
`Pre-order traversal` visits the current node before its child nodes.
```
current node -----> left branch -----> right branch
```
In a pre-order traversal, the root is always the first node visited.

### Post-Order Traversal
`Post-order traversal` visits the current node after its child nodes.
```
left branch -----> right branch -----> current node
```
In a post-order traversal, the root is always the last node visited.


## Binary Heaps (Min-Heaps and Max-Heaps)
A `min-heap` is a _complete binary tree_ (that is, totally filled other than the rightmost elements on the last level) where each node is smaller than its children. The root, therefore, is the minimum element in the tree.

We have two key operations on a min-heap:
* insert
* extract_min

### Insert
* When we insert into a min-heap, we always start by inserting the element at the _bottom_, at the rightmost spot so as to maintain the complete tree property.
* Then, we "fix" the tree by swapping the new element with its parent, until we find an appropriate spot for the element.We essentially bubble up the minimum element.

This takes **O(log n)** time, where n is the number of nodes in the heap.

### Extract Minimum element
* First, it's easy to find the minimum element of a min-heap: it's always at the top. We remove the minimum element and swap it with the last element in the heap (the bottommost, rightmost element).
* Then, we bubble down this element, swapping it with one of its children until the min-heap property is restored.

This algorithm will also take **O(log n)** time.

## Tries (Prefix Trees)


## Graphs
### Adjacency List

### Adjacency Matrices


## Graph Search

### Depth-First Search (DFS)

### Breadth-First Search (BFS)











