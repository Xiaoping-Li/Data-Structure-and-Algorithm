/*
Stack: first-in-last-out. Element is added inorder, and is removed from the end. Could use array to implement
*/

class Stack {
  constructor() {
    this.list = [];
  }
  
  get size() {
    return this.list.length;
  }
  
  push(value) {
    this.list.push(value);
  }
  
  pop() {
    return this.list.pop();
  }
}

/*
题目：利用栈的数据结构特点，将二进制转换为十进制数。
二进制转换为十进制数：从最低位开始，每一位去乘以对应位的积(xi * 2 ^(i - 1))，然后全部加起来。

The primary uses of the Number object are:

If the argument cannot be converted into a number, it returns NaN.
In a non-constructor context (i.e., without the new operator), Number can be used to perform a type conversion.
*/
const bin2Dec = (binary) => {
  const binArray = binary.toString().split('');
  let dec = 0;
  let i = 0;
  while (binArray.length) {
    let item = Number(binArray.pop()); // In a non-constructor context (i.e., without the new operator), Number can be used to perform a type conversion.
    dec += (item * Math.pow(2, i));
    i++;
  }
  return dec;
};

console.log(bin2Dec(10001000));

/*
题目：
括号匹配：编写一个自动检测程序，检测括号是否以正确的形式成对出现。括号可以任意嵌套，例如[()]["({})"]<"[()]">是合法的，[(}]是非法的。
*/
const validBrackets = (str) => {
  let valid = true;
  const brackesObj = {
    ')': '(',
    ']': '[',
    '}': '{',
    '>': '<',
  };
  const items = str.split('');
  const stack = [];

  while (items.length) {
    let item = items.shift();
    if (!stack.length) {
      stack.push(item);
    } else {
      if (brackesObj[item] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(item);
      }
    } 
  }

  if (stack.length) valid = false;
  return valid;
};

console.log(validBrackets(')[()][({})]<[()]>'));





/*
题目：
进制转换：从二进制到八进制；从二进制到十六进制。需要用到两个stack。（或者一个stack连接一个queue)。
一个字节(8bit)刚好用两个十六进制数可以表示，大大节省了显示空间。早期的计算机系统都是三的倍数，所以用八进制比较方便。
*在进行二进制到八进制的转换时，要将二进制数的每三位转换成一个八进制数来表示，然后按顺序输出即可。

***二进制       **八进制 or 十六进制
0              0
1              1
10             2
11             3
100            4
101            5
110            6
111            7
1000           8
1001           9
1010           A
1011           B
1100           C
1101           D
1110           E
1111           F

*/
