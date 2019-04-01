/*
1.6 String Compression

Implement a method to perform basic string compression using the counts of repeated characters. For example, the string 'aabccccc
aaa' would become 'a2b1c5a3'. If the compressed string would not become smaller than the original string, return the original
string instead. You can assume the string has only uppercase and lowercase letters (a-z).
*/

const strCompression = str => {
  if (str.length < 2) return str;
  let rtn = '';
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
    count++;
    if (i + 1 >= str.length || str[i] !== str[i + 1]) {
      rtn += str[i] + count;
      count = 0;
    }
  }
  
  return rtn.length < str.length ? rtn : str;
}
