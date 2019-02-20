/*Recursion*/
const reverse = str => {
  let n = str.length;
  if (!n) return '';
  return str[n - 1] + reverse(str.slice(0, n - 1));  
}

console.log(reverse('abcde'));
