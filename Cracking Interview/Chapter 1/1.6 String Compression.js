/*
1.6 String Compression

Implement a method to perform basic string compression using the counts of repeated characters. For example, the string 'aabccccc
aaa' would become 'a2b1c5a3'. If the compressed string would not become smaller than the original string, return the original
string instead. You can assume the string has only uppercase and lowercase letters (a-z).
*/

const strCompression = str => {
  if (str.length < 2) return str;
  let rtn = str[0];
  let count = 1;
  let i = 1;
  while (i < str.length) {
    if (str[i - 1] === str[i]) {
      count++;
    } else {
      rtn = rtn + count.toString() + str[i];
      count = 1;
    }
    i++;
  }
  
  rtn = rtn + count.toString()
  return rtn.length < str.length ? rtn : str;
}
