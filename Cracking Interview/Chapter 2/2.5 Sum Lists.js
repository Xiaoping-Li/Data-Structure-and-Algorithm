/*
2.5 Sum Lists
You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse 
order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a 
linked list.
Example:
Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). 
Output: 2 -> 1 -> 9

Follow up:
Suppose the digits are stored in forward order. Repeat the above problem.
Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). 
Output: 9 -> 1 -> 2
*/

// Node constructor function
function Node(val) {
  this.value = val;
  this.next = null;
};

const sumLists = (list1, list2) => {
  let current1 = list1;
  let current2 = list2;
  let carrier = 0;
  let total;
  let rtn = new Node(carrier);
  let current = rtn;
  while (current1 || current2) {
    total = carrier;
    if(current1) total += current1.value;
    if(current2) total += current2.value;
    total >= 10 ? carrier = 1 : carrier = 0;
    current.value = total % 10;
    current.next = new Node(carrier);
    current = current.next;
    current1 = current1.next;
    current2 = current2.next;  
  }
  
  
}









