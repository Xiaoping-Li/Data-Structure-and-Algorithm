/*
Selection Sort

In computer science, selection sort is a sorting algorithm, specifically an in-place comparison sort. It has O(n2) time 
complexity, making it inefficient on large lists, and generally performs worse than the similar insertion sort. Selection sort 
is noted for its simplicity, and it has performance advantages over more complicated algorithms in certain situations, 
particularly where auxiliary memory is limited.

The algorithm divides the input list into two parts: the sublist of items already sorted, which is built up from left to right 
at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, 
the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest 
(or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted 
element (putting it in sorted order), and moving the sublist boundaries one element to the right.

***In computer science, an in-place algorithm is an algorithm which transforms input using no auxiliary data structure. However a 
small amount of extra storage space is allowed for auxiliary variables. The input is usually overwritten by the output as the 
algorithm executes. In-place algorithm updates input sequence only through replacement or swapping of elements. An algorithm 
which is not in-place is sometimes called not-in-place or out-of-place.
*/

const selectSort = (numList) => {
  // Return numList directly if array has less than 2 elements
	if (numList.length < 2) return numList;
  
  // Outside loop: from 0 to the second last element
	for (let i = 0; i < numList.length - 1; i++) {
		let min = numList[i];
		let minIdx = i;

		// Find the min value and index from unsorted sublist
		for (let j = i + 1; j < numList.length; j++) {
			if (numList[j] < min) {
				min = numList[j];
				minIdx = j;
      }
    }

    // Swap the min value with the most left element of unsorted sublist
    numList[minIdx] = numList[i];
    numList[i] = min; 
  }
  return numList;
};

const array = [6, 5, 2, 1, 3, 0];
console.log(selectSort(array));
