/*
Is Unique:
Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
*/

// Brute force
const isUnique = (str) => {
  if (str.length === 1) return true;
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
}
