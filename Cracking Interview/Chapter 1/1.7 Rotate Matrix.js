/*
1.7 Rotate Matrix

Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes. Write a method to rotate the image by 90
degree. Can you do this in place?

Ask questions:
1. Rotate direction: clockwise or anticlockwise?            
*/

// Brute force: create new nested array, rotate the original one, and fill the new nested array
const RotateMatrix = array => {
  const rotated = [];
  const n = array.length;
  for (let i = 0; i < n; i++) {
    rotated.push([]);
  }
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rotated[j][n - 1 - i] = array[i][j];
    }
  }
  return rotated;
}


// In place solution:
/*
for i = 0 to n:
  temp = top[i]
  top[i] = left[i]
  left[i] = bottom[i]
  bottom[i] = right[i]
  right[i] = temp
*/

const RotateMatrix = nums => {
  if (!nums.length || nums.length !== nums[0].length) return;
  const n = nums.length;
  for (let i = 0; i < n / 2; i++) {
    
  }
  
}












