// Strings in JavaScript: Examples and Explanations

// --- Basic Variables and String Interpolation ---

// Declare variables for name and age
const name = "Akash Thakre";   
const age = 30;  

// Create a greeting message using template literals (string interpolation)
console.log(`Hello, my name is ${name} and I am ${age} years old.`);  

// Declare a variable for a game title
const game = "God Of War";  

// Use template literal to display favorite game
console.log(`My favorite game is ${game}.`);

// Get the length of the game string (number of characters) and display it
console.log(`It has ${game.length} characters.`);


// --- String Methods: Examples and Explanations ---

const message = "Hello, world!";

// length: Get the number of characters in the string
console.log(`The length of "${message}" is: ${message.length}`);

// charAt(index): Get the character at a specific index (0-based)
console.log(`The character at index 4 of "${message}" is: ${message.charAt(4)}`);

// charCodeAt(index): Get the Unicode (numeric code) of the character at an index
console.log(`The Unicode of the first character in "${message}" is: ${message.charCodeAt(0)}`); 

// concat(str1, str2, ...): Join strings together
console.log(`Concatenating "JavaScript" and " is fun!" : ${"JavaScript".concat(" is fun!")}`);

// indexOf(searchValue, fromIndex): Find the first index of a substring
console.log(`The index of "world" in "${message}" is: ${message.indexOf("world")}`);

// lastIndexOf(searchValue, fromIndex): Find the last index of a substring
console.log(`The last index of "l" in "${message}" is: ${message.lastIndexOf("l")}`);

// includes(searchValue, fromIndex): Check if a substring is present (true/false)
console.log(`Does "${message}" include "world"? ${message.includes("world")}`);

// startsWith(searchString, position): Check if the string starts with a specific substring
console.log(`Does "${message}" start with "Hello"? ${message.startsWith("Hello")}`);

// endsWith(searchString, length): Check if the string ends with a specific substring
console.log(`Does "${message}" end with "!"? ${message.endsWith("!")}`);

// toUpperCase(): Convert the string to all uppercase
console.log(`"${message}" in uppercase: ${message.toUpperCase()}`);

// toLowerCase(): Convert the string to all lowercase
console.log(`"${message}" in lowercase: ${message.toLowerCase()}`);

// slice(start, end): Extract a portion of the string (up to, but not including, 'end')
console.log(`Slice from index 7 to 12 of "${message}": ${message.slice(7, 12)}`);

// substring(start, end): Similar to slice, but with different behavior for negative indexes
console.log(`Substring from index 0 to 5 of "${message}": ${message.substring(0, 5)}`);

// trim(): Remove leading and trailing whitespace
const extraSpaces = "   Trim me!   ";
console.log(`Trimmed string: "${extraSpaces.trim()}"`);

// replace(searchValue, newValue): Replace the first occurrence of a substring
console.log(`Replacing "world" with "everyone" in "${message}": ${message.replace("world", "everyone")}`);
