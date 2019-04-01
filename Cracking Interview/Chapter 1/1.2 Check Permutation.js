/*
Check Permutation:
Given two strings, write a method to decide if one is a permutation of the other?
Ask questions:
1. Case sensitive?
2. Whitespace significant?
*/

const checkPermutation = (str1, str2) => {
  // Special case: different length means not permutation
  if (str1.length !== str2.length) return false;
  
  // If they are permutation to each other, then should have save frequency for each unique character
  const charObj = {};
  for (let i = 0; i < str1.length; i++) {
    if (charObj[str1[i]]) {
      charObj[str1[i]]++;
    } else {
      charObj[str1[i]] = 1;
    }
  }
  
  for (let j = 0; j < str2.length; j++) {
    if (charObj[str2[j]]) {
      charObj[str2[j]]--;
    } else {
      return false;
    }
  }
  
  // Check if charObj has characters whoes value are not 0
  const values = Object.values(charObj).filter(val => val !== 0);
  return values.length ? false : true;  
}

