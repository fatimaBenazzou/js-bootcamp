const navLeft = document.querySelector(".left");
const navRight = document.querySelector(".right");

const images = document.querySelector(".images");
const colors = document.querySelector(".colored-backgrounds");

let index = 0;

function right() {
    transform((index = index < 3 ? ++index : 0));
}

function left() {
    transform((index = index > 0 ? --index : 3));
}

navLeft.addEventListener("click", left);
navRight.addEventListener("click", right);

function transform(index) {
    images.style.transform = `translateX(-${index * 100}%)`;
    colors.style.transform = `translateX(-${index * 100}%)`;
}

// class HashTable {
//     constructor(size = 100) {
//         this.table = new Array(size);
//         this.buckets = new Array(size).fill(null).map(() => []);
//     }

//     hash(key) {
//         let hash = 0;
//         for (let i = 0; i < key.length; i++) {
//             hash += key.charCodeAt(i);
//         }
//         return hash % this.table.length;
//     }

//     set(key, value) {
//         const index = this.hash(key.toString());
//         const bucket = this.buckets[index];
//         const existing = bucket.find(([k]) => k === key);

//         if (existing) {
//             existing[1] = value; // Update the value if key already exists
//         } else {
//             bucket.push([key, value]); // Add new key-value pair
//         }
//     }

//     get(key) {
//         const index = this.hash(key.toString());
//         const bucket = this.buckets[index];
//         const entry = bucket.find(([k]) => k === key);
//         return entry ? entry[1] : undefined;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     append(value) {
//         const newNode = { value, next: null };
//         if (!this.head) {
//             this.head = newNode;
//         } else {
//             let current = this.head;
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//     }
// }

// class Stack {
//     constructor(items = []) {
//         this.items = [...items];
//     }

//     push(item) {
//         this.items.push(item);
//     }

//     pop() {
//         return this.items.pop();
//     }
// }

// class Queue {
//     constructor(items = []) {
//         this.items = [...items];
//     }

//     enqueue(item) {
//         this.items.push(item);
//     }

//     dequeue() {
//         return this.items.shift();
//     }
// }

// // Sample Data
// const data = Array.from({ length: 100000000 }, (_, i) => i + 1);
// const hashTable = new HashTable();
// const linkedList = new LinkedList();

// for (let num of data) {
//     hashTable.set(num, num);
//     linkedList.append(num);
// }

// const stack = new Stack(data);
// const queue = new Queue(data);

// const target = 99999999;

// // Linked List Search
// console.time("LinkedList Search");
// let foundInLinkedList = false;
// let currentNode = linkedList.head;
// while (currentNode) {
//     if (currentNode.value === target) {
//         foundInLinkedList = true;
//         break;
//     }
//     currentNode = currentNode.next;
// }
// console.timeEnd("LinkedList Search");

// // Stack Search
// console.time("Stack Search");
// let foundInStack = false;
// for (let i = 0; i < stack.items.length; i++) {
//     if (stack.items[i] === target) {
//         foundInStack = true;
//         break;
//     }
// }
// console.timeEnd("Stack Search");

// // Queue Search
// console.time("Queue Search");
// let foundInQueue = false;
// for (let i = 0; i < queue.items.length; i++) {
//     if (queue.items[i] === target) {
//         foundInQueue = true;
//         break;
//     }
// }
// console.timeEnd("Queue Search");

// // Hash Table Search
// console.time("HashTable Search");
// const foundInHashTable = !!hashTable.get(target);
// console.timeEnd("HashTable Search");

// // Results
// console.log({
//     foundInLinkedList,
//     foundInStack,
//     foundInQueue,
//     foundInHashTable,
// });
