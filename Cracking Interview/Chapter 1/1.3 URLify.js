/*
1.3 URLify

Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to
hold the additional characters, and that you are given the true length of the string.
Example: 
Input:  'Mr John Smith     ', 13
Output: 'Mr%20John%20Smith'

String.trim()
String.trimEnd()
String.trimStart()
*/

const URLify = str => {
  return str.trim().split(' ').join('%20');
};

const URLify = (str, n) => {
  let result = '';
  for (let i = 0; i < n; i++) {
    if (str[i] === ' ') {
      result += '%20';
    } else {
      result += str[i];
    }   
  }
  return result; 
}
