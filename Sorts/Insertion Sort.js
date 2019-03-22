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

一、基本思路：

1、设置哨位i = 1

2、将a[i]与a[0]~a[i - 1]的序列从后往前进行比较，如果哨位位置的数比哨位前一位要小，那么两个位置的数交换，标志待排序数的标志位递减。注意，这里需要一个标志位来标志待排序的数挪动到哪个位置，而不是挪动哨位。

3、如果标志位的数比标志位前一位的数要小，则一直交换，直到标志位的数不比标志位前一位的数小或者标志位已经挪动到数组最前端为止（即标志位为0）。

4、递增哨位，重复第二步，直到哨位挪动至数组最末端，排序结束

二、性能分析

直接选择排序的最差时间复杂度为O(n2)，最优时间复杂度为O(n)，平均时间复杂度为O(n2)，

空间复杂度为O(1)，优点是实现简单，不占用多余空间，但效率较低，并且经常需要交换数据。
--------------------- 

原文：https://blog.csdn.net/jinwanchiji/article/details/79652304 
*/

const insertSort = arr => {
	for (let i = 1; i < arr.length; i++) {
		let j = i - 1;
		let temp = arr[i];
		while (j >= 0 && arr[j] > temp) {
		    arr[j+1] = arr[j];
		    j--;
		}
		arr[j+1] = temp;
	}
	return arr;
};


