// Numbers in JavaScript: Examples and Explanations

// --- Basic Number Declarations ---

// Declare a number variable
let score = 100;

// Create a Number object (explicitly)
let scoreValue = new Number(400);

// --- Number Methods: Examples and Explanations ---

// toExponential(): Convert to exponential notation
console.log(`Exponential representation of ${scoreValue}: ${scoreValue.toExponential()}`);

// toFixed(digits): Format with a fixed number of decimal places
console.log(`Fixed representation of ${scoreValue} with 2 decimals: ${scoreValue.toFixed(2)}`);

// toPrecision(precision): Format with a specific number of significant digits
let newNumber = 23.908;
console.log(`Precision of ${newNumber} to 2 digits: ${newNumber.toPrecision(2)}`);

// toLocaleString(): Format a number according to locale settings
const hundreds = 1000000;
console.log(`Locale string of ${hundreds}: ${hundreds.toLocaleString()}`);
console.log(`Indian locale string of ${hundreds}: ${hundreds.toLocaleString('en-IN')}`);


// --- Math Object: Examples and Explanations ---

console.log('\n///////////////// Math Object ////////////////\n');

// The Math object itself
console.log(Math); // Reveals the Math object's properties and methods

// PI: Mathematical constant pi
console.log(`Value of pi: ${Math.PI}`);

// abs(x): Absolute value of a number
console.log(`Absolute value of -9: ${Math.abs(-9)}`);

// round(x): Round a number to the nearest integer
console.log(`Round 3.5: ${Math.round(3.5)}`);

// ceil(x): Round a number up to the nearest integer
console.log(`Ceil of 4.7: ${Math.ceil(4.7)}`);

// sqrt(x): Square root of a number
console.log(`Square root of 25: ${Math.sqrt(25)}`);

// floor(x): Round a number down to the nearest integer
console.log(`Floor of 4.9: ${Math.floor(4.9)}`);

// min(x, y, ...): Find the minimum of a set of numbers
console.log(`Minimum of 1, 2, 3, 4: ${Math.min(1, 2, 3, 4)}`);

// max(x, y, ...): Find the maximum of a set of numbers
console.log(`Maximum of 1, 2, 3, 4: ${Math.max(1, 2, 3, 4)}`);

// random(): Generate a random number between 0 (inclusive) and 1 (exclusive)
console.log(`Random number: ${Math.random()}`);

// Generating random numbers within a range
const min = 10;
const max = 20;
console.log(`Random number between ${min} and ${max}: ${Math.floor(Math.random() * (max - min + 1)) + min}`);
