// Arrays in JavaScript: Examples and Explanations

// --- Creating Arrays ---

// Creating an array with numeric elements
const myArr = [1, 2, 3, 4, 5];

// Creating an array with string elements
const myHeroes = ['Shaktiman', 'Naagraj', 'Doga'];

// Creating an array using the Array constructor (less common)
const myArr2 = new Array('2,3,4,5'); // Note: This creates a single-element array with the string "2,3,4,5"


// --- Accessing Array Elements ---
console.log(myArr[2]); // Output: 3 (accesses the element at index 2)


// --- Array Methods: Modifying Arrays ---

// push(): Adds elements to the end of the array
myArr.push(5);
myArr.push(6);
console.log(myArr); // Output: [1, 2, 3, 4, 5, 5, 6]

// pop(): Removes the last element from the array
myArr.pop();
console.log(myArr); // Output: [1, 2, 3, 4, 5, 5]

// unshift(): Adds elements to the beginning of the array
myArr.unshift(9);
console.log(myArr); // Output: [9, 1, 2, 3, 4, 5, 5]

// shift(): Removes the first element from the array
myArr.shift();
console.log(myArr); // Output: [1, 2, 3, 4, 5, 5]

// --- Array Methods: Searching and Joining ---

// includes(value): Checks if a value exists in the array (true/false)
console.log(myArr.includes(9)); // Output: false

// indexOf(value): Finds the index of the first occurrence of a value (-1 if not found)
console.log(myArr.indexOf(56)); // Output: -1
console.log(myArr.indexOf(2)); // Output: 1

// join(separator): Creates a string from array elements with an optional separator
const newArr = myArr.join();
console.log(newArr); // Output: 1,2,3,4,5,5 (default separator is comma)
console.log(typeof newArr); // Output: string


// --- Array Methods: Copying and Extracting ---

// slice(start, end): Creates a shallow copy of a portion of an array (up to but not including 'end')
console.log("Original array (A):", myArr);
const myn1 = myArr.slice(1, 3); 
console.log("Slice (1, 3):", myn1); // Output: [2, 3] 
console.log("Array after slice (A):", myArr); // Original array is unchanged

// splice(start, deleteCount, item1, item2, ...): Changes the contents of an array by removing or replacing existing elements and/or adding new elements
const myn2 = myArr.splice(1, 3); // Remove 3 elements starting from index 1
console.log("Array after splice (B):", myArr); // Output: [1, 5, 5]
console.log("Removed elements:", myn2); // Output: [2, 3, 4]
