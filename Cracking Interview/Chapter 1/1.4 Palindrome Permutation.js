/*
1.4 Palindrome Permutation

Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the 
same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just 
dictionary words.

Ask questions:
1. Case sensitive?
2. Whitespace significant?

Hint: At most one character has odd number of frequency.
*/

const PalindromePermutation = str => {
  const count = {};
  for (let i = 0; i < str.length; i++) {
    if (count[str[i]]) {
      count[str[i]]++;
    } else {
      count[str[i]] = 1;
    }
  }
  
  // Count how many characters have odd number frequencies
  const oddFreq = Object.values(count).filter(val => val % 2 !== 0);
  return oddFreq.length > 1 ? false : true;
} 
