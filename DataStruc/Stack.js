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
