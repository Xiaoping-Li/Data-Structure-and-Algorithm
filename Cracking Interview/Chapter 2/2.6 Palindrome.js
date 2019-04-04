/*
2.6 Palindrome
Implement a function to check if a linked list is a palindrome.
*/
function Node(val) {
  this.value = val;
  this.next = null;
};

// Using stack data structure store first half of list, and offset last half of list. If stack is empty in the end, then return
// true.
const isPalindrome = list => {
  const stack = [];
  let fast = list;
  let slow = list;
  while (fast && fast.next) {
    stack.push(slow.value);
    slow = slow.next;
    fast = fast.next.next;
  }
  
  // If list has odd numbers of element, skip the middle one
  if (fast) slow = slow.next;
  
  while (slow) {
    if (slow.value === stack[stack.length - 1]) {
      stack.pop();
      slow = slow.next;
    } else {
      return false;
    }
  }
  return true;
};


// Create reversed list and compare each element between original and reversed lists
const isPalindrome = list => {
  let reversed = new Node(list.value);
  let current = list.next;
  while (current) {
    let newNode = new Node(current.value);
    newNode.next = reversed;
    reversed = newNode;
    current = current.next;
  }
  
  let headList = list;
  let headReversed = reversed;
  while (headList) {
    if (headList.value !== headReversed.value) return false;
    headList = headList.next;
    headReversed = headReversed.next;
  }
  return false;  
}

