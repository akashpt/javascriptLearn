// For...Of Loops in JavaScript: Examples and Explanations

// --- Iterating over Arrays ---

// Array of numbers
const myArray = [1, 2, 3, 4, 5];

// Iterate over the array, accessing each element directly
for (const num of myArray) {
    console.log(num); // Output: 1 2 3 4 5 (each number on a new line)
}


// --- Iterating over Strings ---

// String
const greetings = "Hello World";

// Iterate over the string, accessing each character
for (const greet of greetings) {
    console.log(greet);  // Output: H e l l o   W o r l d (each character on a new line)
}


// --- Iterating over Maps ---
// Note: Maps were introduced in ES6 and are a collection of key-value pairs.

// Create a Map object
const map = new Map(); 
map.set("MH", "MAHARASHTRA");
map.set("UP", "UTTAR PRADESH");
map.set("RJ", "RAJASTHAN");

console.log(map);
/* Output: 
Map(3) {
  'MH' => 'MAHARASHTRA',
  'UP' => 'UTTAR PRADESH',
  'RJ' => 'RAJASTHAN'
}
*/


// Iterate over the Map, getting both key and value
for (const [key, value] of map) { 
    console.log(key, value);  
    // Output (each key-value pair on a new line):
    // MH MAHARASHTRA
    // UP UTTAR PRADESH
    // RJ RAJASTHAN
}

/**
 * 
 * 
 * 
 * Explanation of the for...of Loop:

    Structure: for (variable of iterable) { code }
    Purpose: A concise way to iterate over iterable objects like arrays, strings, maps, sets, etc.
    Variable: The variable (e.g., num, greet, key, value) holds the current value in the iterable during each iteration.
    Iterable: The iterable is the object you want to loop through (e.g., myArray, greetings, map).

Key Points:

    Direct Value Access: The for...of loop gives you direct access to the values of the iterable object, unlike for...in, which iterates over object properties or array indices.
    Simplicity: The for...of loop provides a cleaner syntax compared to traditional for loops, especially when you don't need the index.
    Compatibility: The for...of loop is a relatively modern feature (introduced in ES6), so ensure browser compatibility if you're targeting older browsers.

Iterable Objects in JavaScript:

    Arrays
    Strings
    Maps
    Sets
    Typed Arrays
    NodeLists
    Arguments Object
    Generators
    And more...
 */