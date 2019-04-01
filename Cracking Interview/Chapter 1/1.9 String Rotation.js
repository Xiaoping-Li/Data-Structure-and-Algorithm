/*
1.9 String Rotation

Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write 
code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g.,'waterbottle' is a rotation of 'erbottlewat').
*/

// Brute force: time O(n ^ 2) - n: str length. Space O(n) - rotated str 
const isSubstring = (str1, str2) => {
  if (str1 === str2) return true;
  if (str1.length !== str2.length) return false;
  
  const str1Array = str1.split('');
  for (let i = 0; i < str1.length - 1; i++) {
    str1Array.unshift(str1Array.pop()); 
    let rotated = str1Array.join('');
    if (rotated === str2) return true;
  }
  return false;
};



const isSubstring = (str1, str2) => {
  if (str1 === str2) return true;
  if (str1.length !== str2.length) return false;
  
  // Find index in str2 for the last character in str1, this k=index+1 is the rotating times
  let k;
  let rotated;
  for(let i = 0; i < str2.length; i++) {
    if (str2[i] === str1[str1.length - 1]) {
      k = i + 1;
      break; // !!!Remember break when find the first match
    }
  }
  
  const beforeK = str1.slice(0, str1.length - k);
  const afterK = str1.slice(str1.length - k);
  rotated = afterK + beforeK;
  
  for (let i = 0; i < rotated.length; i++) {
    if (rotated[i] !== str2[i]) return false;
  }
  return true;
}
