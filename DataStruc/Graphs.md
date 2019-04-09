# Graphs
A graph is simply a collection of nodes with edges between (some of) them.
* Graphs can be either _directed_ or _undirected_. While _directed_ edges are like a `one-way` street, _directed_ edges are like a `two-way` street.
* The graph might consist of multiple isolated subgraphs. If there is a path between every pair of vertices, it is called a "connected graph".
* The graph can also have cycles (or not). An "acyclic graph" is one without cycles.

```
function GraphNode(data) {
  this.data = data;
  this.edges = [];
};

class Graph {
  constructor() {
    this.vertices = [];
  }
}
```

## Two common ways to represent a graph
### Adjacency List
This is the most common way to represent a graph. Every vertex (or node) stores a list of _adjacent vertices_. In an _undirected_ graph, an edge like (a,b) would be stored twice: once in a's adjacent vertices and once in b's adjacent vertices. You don't necessarily need any additional classes to represent a graph. An `array` (or a `hash table`) of lists (arrays, arraylists, linked lists, etc.) can store the adjacency list.

### Adjacency Matrices
An _adjacency matrix_ is an NxN boolean matrix (where N is the number of nodes), where a `true` value at `matrix[i][j]` indicates an edge from node i to node j. (Could use integer 0s and 1s). In an _undirected_ graph, an adjacency matrix will be symmetric. In a _directed_ graph, it will not (necessarily) be.

## Graph Search
### Depth-First Search (DFS)
In **DFS**, we start at the root (or another arbitrarily selected node) and explore each `branch` completely before moving on to the next branch. We go deep first before we go wide.

DFS is often preferred if we want to visit every node in the graph.

**Note** that pre-order and other forms of tree traversal are a form of DFS. The key difference is that when implementing this algorithm for a graph, we **must** check if the node has been `visited`. If we don't, we risk getting stuck in an infinite loop.

Pseudocode implementing DFS:
```
search(root) {
  if (!root) return;
  visit(root);
  root.visited = true;
  for each (GraphNode n in root.adjacent) {
    if (!n.visited) {
      search(n);
    }
  }
}
```

### Breadth-First Search (BFS)
In **BFS**, we start at the root (or another arbitrarily selected node) and explore each `neighbor` before going on to any of their children. We go wide before we go deep.

If we want to find the shortest path (or just any path) between two nodes, BFS is generally better.

**Note** The key thing to remember when implementing a BFS is the use of the `queue`.
```
search(root) {
  const queue = [];
  root.marked = true;
  queue.enqueue(root);
  
  while (!queue.isEmpty()) {
    let r = queue.dequeue();
    visit(r);
    for each (GraphNode n in r.adjacent) {
      if (!n.marked) {
      n.marked = true;
      queue.enqueue(n);
      }
    }
  }
}
```

### Bidirectional Search
_Bidirectional search_ is used to find the shortest path between a source and destination node. It operates by essentially running two simultaneous breadth-first searches, one from each node. When their searches collide, we have found a path.

