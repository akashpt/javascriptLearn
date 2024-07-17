// Objects in JavaScript (Part 2): More Techniques and Exploration

// --- Creating Objects ---

// Using the `new Object()` constructor (less common)
const tinderUser = new Object(); 

// Using object literal syntax (most common and preferred)
const facebookUser = {};

// Adding properties to the object
facebookUser.id = "123";
facebookUser.name = "Akash Thakre";
facebookUser.isLoggedIn = false;

console.log(facebookUser); // Output: { id: '123', name: 'Akash Thakre', isloggedin: false }


// --- Nested Objects ---

const regularUser = {
    email: "akashthakre@gmail.com",
    fullName: { // Nested object for full name
        userfullname: { // Further nested object
            firstName: "Akash",
            lastName: "Thakre"
        }
    }
};

// Accessing properties within nested objects
console.log(regularUser.fullName.userfullname); // Output: { firstName: 'Akash', lastName: 'Thakre' }


// --- Combining Objects ---

// Objects containing other objects
const objectOne = { 1: "A", 2: "B" };
const objectTwo = { 3: "C", 4: "D" };

// Combining objects by nesting (creates a new object with references to the original objects)
const obj3 = { objectOne, objectTwo };
console.log(obj3);  

// Combining objects using `Object.assign` (creates a new object by merging properties)
const obj4 = Object.assign({}, objectOne, objectTwo);
console.log(obj4); 

// Combining objects using the spread syntax (ES6 feature, similar to `Object.assign`)
const obj5 = { ...objectOne, ...objectTwo };
console.log(obj5); // Output: { 1: 'A', 2: 'B', 3: 'C', 4: 'D' }


// --- Object Methods: Introspection and Checking ---

// Object.keys(obj): Get an array of the object's own keys
console.log(Object.keys(facebookUser)); // Output: ['id', 'name', 'isLoggedIn']

// Object.values(obj): Get an array of the object's own values
console.log(Object.values(facebookUser)); // Output: ['123', 'Akash Thakre', false]

// Object.entries(obj): Get an array of arrays, each containing a key-value pair
console.log(Object.entries(facebookUser)); 
/* Output: [
    ['id', '123'],
    ['name', 'Akash Thakre'],
    ['isLoggedIn', false]
  ]
*/

// hasOwnProperty(prop): Check if an object has a property directly on itself (not inherited)
console.log(facebookUser.hasOwnProperty("name")); // Output: true
