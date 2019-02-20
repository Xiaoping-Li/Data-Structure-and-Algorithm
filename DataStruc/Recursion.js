/*Recursion*/
const reverse = str => {
  let n = str.length;
  if (!n) return '';
  return str[n - 1] + reverse(str.slice(0, n - 1));  
}

console.log(reverse('abcde'));

/*
题目：有序序列：1 1 2 3 5 8 13 21 34 55 89，要求查找55的记录
折半查找：先确定待查找记录的所在范围，然后逐渐缩小这个范围，直到找到该记录或查找失败（查无该记录）为止。
我们可以设计指针low和high分别指向关键字序列的上界和下界，指针mid指向序列的中间位置，即mid = (low+high)/2. 比较mid指针的值与所查询的数值的大小，如果
mid指针的值大于所查询的数值，将high指针挪到mid指针的位置；如果mid指针的值小于所查询的数值，将low指针挪到mid指针的位置。如果相等，查找成功，返回；如果
查无所获，返回查找失败。
*/
