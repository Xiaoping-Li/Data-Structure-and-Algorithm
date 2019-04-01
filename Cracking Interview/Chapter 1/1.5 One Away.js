/*
1.5 One Away

There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character.
Given two strings, write a function to check if they are one edit (or zero edits) away.
Example:
pale, ple     ---> true
pales, pale   ---> true
pale, bale    ---> true
pale, bae     ---> false
*/

const oneAway = (str1, str2) => {
  let count = 0;
  if (str1.length === str2.length) {
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        count++;
      }
      if (count > 1) return false;
    }
    return true;
  }
  
  if (Math.abs(str1.length - str2.length) === 1) {
    let long, short;
    if (str1.length > str2.length) {
      long = str1;
      short = str2;
    } else {
      long = str2;
      short = str1;
    }
    
    let j = 0;
    let k = 0;
    while (k < long.length) {
      if (short[j] === long[k]) {
        j++;
        k++;
      } else {
        if (short[j] === long[k + 1]) {
          j++;
          k += 2;
        } else {
          return false;
        }
        count++;
        if (count > 1) return false;
      }
    }
    return true;
  }
  
  return false;
}
