/*
3.6 Animal Shelter
An animal shelter, which holds only dogs and cats, operates on a strictly "first in, first out" basis. People must adopt either
the "oldest" (based on arrival time) of all animals at the shelter, or they can select whether they would prefer a dog or a cat
 (and will receive the oldest animal of that type). They cannot select which specific animal they would like. Create the data
 structure to maintain this system and implement operations such as 'enqueue', 'dequeueAny', 'dequeueDog', 'dequeuCat'. You may
 use the built-in LinkedList data structure.
*/

function Node(date, species) {
 this.date = date;
 this.species = species;
 this.next = null;
};

class AnimalShelter {
 constructor() {
  this.head = null;
 }
 
 enqueue(date, species) {
  const newPet = new Node(date, species);
  if (!this.head) {
   this.head = newPet;
  } else {
   let tail = this.head;
   while(tail.next) {
    tail = tail.next;
   }
   tail.next = newPet;
  } 
 }
 
 dequeueAny() {
  if (!this.head) return 'No pet availabe';
  let current = this.head;
  if (!this.head.next) {
   this.head = null;
  } else {
   this.head = current.next;
  }
  return current;
 }
 
 dequeueDog() {
  if (!this.head) return 'No pet availabe';
  let current = this.head;
  if (current.species === 'Dog') return this.dequeueAny();
  while (current.next) {
   if (current.next.species === 'Dog') {
    let prev = current;
    current = current.next;
    prev.next = current.next;
   } else {
    current = current.next;
   } 
  }
  return current;
 }
 
  dequeueCat() {
  if (!this.head) return 'No pet availabe';
  let current = this.head;
  if (current.species === 'Cat') return this.dequeueAny();
  while (current.next) {
   if (current.next.species === 'Cat') {
    let prev = current;
    current = current.next;
    prev.next = current.next;
   } else {
    current = current.next;
   } 
  }
  return current;
 } 
}
