/*
1. 插入排序分为直接插入排序，二分插入排序，希尔排序。其中直接插入排序和二分插入排序是稳定的算法，希尔排序是不稳定的算法。
2. Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list. At each iteration, 
insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it 
there. It repeats until no input elements remain.
3. Sorting is typically done in-place, by iterating up the array, growing the sorted list behind it. At each array-position, 
it checks the value there against the largest value in the sorted list (which happens to be next to it, in the previous 
array-position checked). If larger, it leaves the element in place and moves to the next. If smaller, it finds the correct 
position within the sorted list, shifts all the larger values up to make a space, and inserts into that correct position.
4. The resulting array after k iterations has the property where the first k + 1 entries are sorted ("+1" because the first 
entry is skipped). In each iteration the first remaining entry of the input is removed, and inserted into the result at the 
correct position.
5. The best case input is an array that is already sorted. In this case insertion sort has a linear running time (i.e., O(n)).
6. The simplest worst case input is an array sorted in reverse order. This gives insertion sort a quadratic running time 
(i.e., O(n2)).
7. The average case is also quadratic[5], which makes insertion sort impractical for sorting large arrays. However, insertion 
sort is one of the fastest algorithms for sorting very small arrays, even faster than quicksort; indeed, good quicksort 
implementations use insertion sort for arrays smaller than a certain threshold, also when arising as subproblems; the exact 
threshold must be determined experimentally and depends on the machine, but is commonly around ten.
8. Insertion sort is very similar to selection sort.
9. https://en.wikipedia.org/wiki/Insertion_sort
*/

const insertSort = numList => {
	for (let i = 1; i < numList.length; i++) {
		let temp = numList[i];
    if (temp >= numList[i - 1]) continue;
		for (let j = i - 1; j >= 0; j--) {
			if (temp < numList[j]) {
				numList[j + 1] = numList[j];
				if (j === 0 || numList[j - 1] <= temp) {
					numList[j] = temp;
					break;
        }
      }
    }
  }
  return numList;
};
