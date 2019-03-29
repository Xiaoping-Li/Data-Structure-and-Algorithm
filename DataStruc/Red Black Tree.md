# Red Black Tree
Red-Black Tree is a self-balancing `Binary Search Tree` (BST) where every node follows following rules.
6 rules:
* Every node is either red or black
* Root node is always black
* New insertions are always red
* Every path from root-leaf has the same number of BLACK nodes
* No path can have two consecutive RED nodes
* Nulls are black

2 Rebalance rules:
* Black aunt rotate: BAR (After rotation: parent is BLACK, children are RED)
* Red aunt color flip (After color flip: parent is RED, children are BLACK)

**Why Red-Black Trees?**
Most of the BST operations (e.g., search, max, min, insert, delete.. etc) take O(h) time where h is the height of the BST. The cost of these operations may become O(n) for a skewed Binary tree. If we make sure that height of the tree remains O(Logn) after every insertion and deletion, then we can guarantee an upper bound of O(Logn) for all these operations. The height of a Red-Black tree is always O(Logn) where n is the number of nodes in the tree.
