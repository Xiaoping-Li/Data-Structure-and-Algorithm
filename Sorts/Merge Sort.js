/*
Merge Sort

In computer science, merge sort (also commonly spelled mergesort) is an efficient, general-purpose, comparison-based sorting 
algorithm. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input 
and output. Merge sort is a divide and conquer algorithm.

Algorithm
Merge sort keeps on dividing the list into equal halves until it can no more be divided. By definition, if it is only one 
element in the list, it is sorted. Then, merge sort combines the smaller sorted lists keeping the new list sorted too.

Step 1 − if it is only one element in the list it is already sorted, return.
Step 2 − divide the list recursively into two halves until it can no more be divided.
Step 3 − merge the smaller lists into new list in sorted order.



*/

/*
!0 === true
!'' === true
![] === false
![].length === true
!{} === false
*/

const merge = (left, right) => {
	const combine = [];
	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			combine.push(left.shift());
		} else {
			combine.push(right.shift());
		}
	}


	return combine.concat(left).concat(right);
};

const mergeSort = (array) => {
	let n = array.length;
	let midPoint = Math.round(n / 2);
  
	if (n === 1) return array;
	let left = array.slice(0, midPoint);
	let right = array.slice(midPoint);
  
	return merge(mergeSort(left), mergeSort(right));	
};
