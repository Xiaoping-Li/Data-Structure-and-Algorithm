/*
Bubble Sort
1. Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong 
order. Although the algorithm is simple, it is too slow and impractical for most problems even when compared to insertion sort.
[2] Bubble sort can be practical if the input is in mostly sorted order with some out-of-order elements nearly in position.

2. Starting from the beginning of the list, compare every adjacent pair, swap their position if they are not in the right order
(the latter one is smaller than the former one). After each iteration, one less element (the last one) is needed to be compared
until there are no more elements left to be compared.

3. The only significant advantage that bubble sort has over most other algorithms, even quicksort, but not insertion sort, is 
that the ability to detect that the list is sorted efficiently is built into the algorithm. When the list is already sorted 
(best-case), the complexity of bubble sort is only O(n). By contrast, most other algorithms, even those with better 
average-case complexity, perform their entire sorting process on the set and thus are more complex. However, not only does 
insertion sort share this advantage, but it also performs better on a list that is substantially sorted (having a small number 
of inversions).

4. The distance and direction that elements must move during the sort determine bubble sort's performance because elements move
in different directions at different speeds. An element that must move toward the end of the list can move quickly because it 
can take part in successive swaps. For example, the largest element in the list will win every swap, so it moves to its sorted 
position on the first pass even if it starts near the beginning. On the other hand, an element that must move toward the 
beginning of the list cannot move faster than one step per pass, so elements move toward the beginning very slowly. If the 
smallest element is at the end of the list, it will take n−1 passes to move it to the beginning. This has led to these types 
of elements being named rabbits and turtles.

5. Bubble sort should be avoided in the case of large collections. It will not be efficient in the case of a reverse-ordered 
collection.

6. a) Outside loop totally runs (n - 1) times
   b) Inner loop runs one less each time, because outside loop bubble a bigger one to the bottom each time
   c) If one outside loop doesn’t swap, means the sort is completed, return the list.
*/
