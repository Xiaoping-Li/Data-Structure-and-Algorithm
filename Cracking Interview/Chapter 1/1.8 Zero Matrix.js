/*
Zero Matrix:
Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.
*/

const cleanRepeats = array => {
  const noRepeats = [];
  array.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (i - 1 < 0 || array[i] !== array[i - 1]) noRepeats.push(array[i]);
  }
  return noRepeats;
};

// O(n) space
const zeroMatrix = nums => {
  // Use array to store rows and cloumns index which needs to be changed to 0
  let rows = [];
  let cols = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      if (nums[i][j] === 0) {
        rows.push(i);
        cols.push(j);
      }
    }
  }

  // Clean rows and cols, remove the repeats
  rows = cleanRepeats(rows);
  cols = cleanRepeats(cols);
  
  // Loop through rows and cols to change elements to 0
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < nums[0].length; j++) {
      if (nums[rows[i]][j]) nums[rows[i]][j] = 0;
    }
  }
  
  for (let i = 0; i < cols.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j][cols[i]]) nums[j][cols[i]] = 0;
    }
  }
  return nums;
}


/*
We can reduce the space to O(1) by using the first row as a replacement for the rows array and the first colum as a replacement
for the column array.
*/
