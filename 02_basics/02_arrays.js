// Advanced Array Operations in JavaScript

// --- Array Creation and Concatenation ---

// Create two arrays of superheroes
const marvelHero = ["thor", "ironman", "spiderman"];
const dcHero = ["superman", "batman", "flash"];

// Incorrect way to combine arrays (creates a nested array)
// marvelHero.push(dcHero);  
// console.log(marvelHero); // Output: ['thor', 'ironman', 'spiderman', ['superman', 'batman', 'flash']]
// console.log(marvelHero[3][1]); // Output: 'batman' (accessing element within nested array)

// Concatenate (combine) arrays using `concat`
const newArray = marvelHero.concat(dcHero);
console.log(newArray); // Output: ['thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash']


// --- Working with Nested Arrays ---

// Create an array with nested arrays
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [3, 4, 5], 5, 6];
console.log(anotherArray); // Output: [1, 2, 3, [4, 5, 6], 7, [3, 4, 5], 5, 6]

// Flatten nested arrays using `flat(Infinity)` (flattens to any depth)
const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray); // Output: [1, 2, 3, 4, 5, 6, 7, 3, 4, 5, 5, 6]


// --- Array Static Methods: Creation and Validation ---

// isArray(obj): Check if a value is an array
console.log(Array.isArray("akash")); // Output: false

// from(iterable): Create a new array from an iterable object
console.log(Array.from("Akash")); // Output: ['A', 'k', 'a', 's', 'h'] 
console.log(Array.from({ name: "Akash" })); // Output: [] (objects are not directly iterable)

// of(...items): Create a new array with variable number of arguments
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // Output: [100, 200, 300]
