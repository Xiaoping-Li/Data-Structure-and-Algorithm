/*1. 插入排序分为直接插入排序，二分插入排序，希尔排序。其中直接插入排序和二分插入排序是稳定的算法，希尔排序是不稳定的算法。


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
