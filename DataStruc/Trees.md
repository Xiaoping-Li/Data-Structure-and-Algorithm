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
* **Depth-First Search (DFS)**: **DFS** explores a path all the way to a leaf before **backtracking** and exploring another path. `pre-order`, `in-order`, and `post-order`
  * `pre-order`
    1. Print the value of the `node`.
    2. Go to the `left child` and print it. This is if, and `only if`, it has a left child.
    3. Go to the `right child` and print it. This is if, and `only if`, it has a right child.
  * `in-order`: The left first, the middle second, and the right last.
    1. Go to the `left child` and print it. This is if, and `only if`, it has a left child.
    2. Print the `node’s` value
    3. Go to the `right child` and print it. This is if, and `only if`, it has a right child.
  * `post-order`: The left first, the right second, and the middle last.
    1. Go to the `left child` and print it. This is if, and `only if`, it has a left child.
    2. Go to the `right child` and print it. This is if, and `only if`, it has a right child.
    3. Print the `node’s` value
* **Breadth-First Search (BFS)**: **BFS** algorithm traverses the `tree` _level by level_ and _depth by depth_. To implement a `BFS` algorithm, we use the `queue` data structure to help.
  1. First **add** the `root node` into the `queue` with the put method.
  2. Iterate while the queue is `not empty`.
  3. Get the `first node` in the `queue`, and then print its value.
  4. **Add** both `left` and `right` children into the `queue` (if the current node has children).
  5. Done. We will print the value of each node, level by level, with our queue helper.

### Binary Tree vs. Binary Search Tree
A `Binary search tree` is a _binary tree_ in which every node fits a specific ordering property: 
**all left descendents <= n < all right descendents**. This **must** be true for each node n.

A Binary Search Tree is sometimes called `ordered or sorted binary trees`, and it keeps its values in _sorted order_, so that lookup and other operations can use the principle of binary search.

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
A `Binary Heap` is a `Binary Tree` with following properties.
 * 1) It’s a `complete tree` (All levels are completely filled except possibly the last level and the last level has all keys as left as possible). This property of Binary Heap makes them suitable to be stored in an `array`.
 * 2) A `Binary Heap` is either `Min Heap` or `Max Heap`. In a Min Binary Heap, the key at root must be minimum among all keys present in Binary Heap. The same property must be recursively true for all nodes in Binary Tree. Max Binary Heap is similar to MinHeap.

We have two key operations on a min-heap:
* insert
* extract_min

**How is Binary Heap represented?**
A `Binary Heap` is a Complete Binary Tree. A binary heap is typically represented as an `array`.
* 1) The `root` element will be at `Arr[0]`.
* 2) Below table shows indexes of other nodes for the `ith node`, i.e., `Arr[i]`:

`Arr[(i-1)/2]`	| Returns the parent node 
------ | ------
`Arr[(2*i)+1]`	| Returns the left child node 
`Arr[(2*i)+2]` |	Returns the right child node 

The traversal method use to achieve Array representation is **Level Order**.

**Operations on Min Heap**:
* 1) `getMini()`: It returns the root element of Min Heap. Time Complexity of this operation is O(1).

* 2) `extractMin()`: Removes the minimum element from MinHeap. Time Complexity of this Operation is O(Logn) as this operation needs to maintain the heap property (by calling heapify()) after removing root.

* 3) `decreaseKey()`: Decreases value of key. The time complexity of this operation is O(Logn). If the decreases key value of a node is greater than the parent of the node, then we don’t need to do anything. Otherwise, we need to traverse up to fix the violated heap property.

* 4) `insert()`: Inserting a new key takes O(Logn) time. We add a new key at the end of the tree. IF new key is greater than its parent, then we don’t need to do anything. Otherwise, we need to traverse up to fix the violated heap property.

* 5) `delete()`: Deleting a key also takes O(Logn) time. We replace the key to be deleted with minum infinite by calling decreaseKey(). After decreaseKey(), the minus infinite value must reach root, so we call extractMin() to remove the key.

## Tries (Prefix Trees)


## Graphs
### Adjacency List

### Adjacency Matrices


## Graph Search

### Depth-First Search (DFS)

### Breadth-First Search (BFS)











