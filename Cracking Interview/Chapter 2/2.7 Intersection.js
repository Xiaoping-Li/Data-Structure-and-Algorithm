/*
2.7 Intersection
Given two (singly) linked list, determine if the two lists intersect. Return the intersecting node. Note that the intersection
is defined on reference, not value. That is, if the kth node of the first linked list is the exact same node (by reference) as
the jth node of the second linked list, then they are intersecting.

Note: In javascript, how to check if two objects have the same reference?
if       const a = {n: 2};
         const b = {n: 2};
then     a === b   => false;
-----------------------------
if       const c = {n: 2};
         const a = c;
         const b = c;         
then     a === b   => true;

*/

// 1. Find if the tail nodes point to the same reference. If not, then intersection is false;
// 2. If true, find the intersecting node, and check if it points to the same reference
// Note: the length of the lists may be not the same, if not, then chop off the extra nodes from the head of the longer list
const intersection = (list1, list2) => {
  let tail1 = list1;
  let tail2 = list2;
  let n = 0, m = 0;
  while (tail1.next || tail2.next) {
    if (tail1.next) {
      n++;
      tail1 = tail1.next;
    }
    
    if (tail2.next) {
      m++;
      tail2 = tail2.next;
    }
  }
  
  if (tail1 !== tail2) return false;
  
  let long = n >= m ? list1 : list2;
  let short = n >= m ? list2 : list1;
  let k = Math.abs(n - m);
  let currentL = long;
  let currentS = short;
  for (let i = 0; i < k; i++) {
    currentL = currentL.next;
  }
  
  while (currentS) {
    if (currentL === currentS) return currentS;
    currentL = currentL.next;
    currentS = currentS.next;
  }
  return false; 
};
