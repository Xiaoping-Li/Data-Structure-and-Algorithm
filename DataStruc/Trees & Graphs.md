# Trees and Graphs
## Types of Trees
A tree is a data structure composed of nodes.
* Each tree has a root node.
* The root node has zero or more child nodes.
* Each child node has zero or more child nodes, and so on.###

### Trees vs. Binary Trees
* Binary tree is a tree which each node has up to two children.
* Not all trees are binary trees.  
**leaf**: A node is called a "leaf" node if it has no children.

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

### In-Order Traversal

### Pre-Order Traversal

### Post-Order Traversal


## Binary Heaps (Min-Heaps and Max-Heaps)


## Tries (Prefix Trees)


## Graphs
### Adjacency List

### Adjacency Matrices


## Graph Search

### Depth-First Search (DFS)

### Breadth-First Search (BFS)











