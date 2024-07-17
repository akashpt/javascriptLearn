// Objects in JavaScript: Examples and Explanations

// --- Object Literals: Creating and Accessing Objects ---

// Create a Symbol (a unique and immutable identifier)
const mySym = Symbol("key1");

// Create a JavaScript user object using object literal notation
const Jsuser = {
    name: "Akash",        // String property for the user's name
    age: 31,              // Number property for the user's age
    [mySym]: "myjey1",    // Symbol property (accessed using square brackets)
    location: "Nagpur",   // String property for the user's location
    isLoggedIn: false,     // Boolean property indicating login status
    lastLoggedin: ["Monday", "Saturday"] // Array property for last login days
};

// Output the entire object
console.log(Jsuser);

// Access properties using dot notation
console.log(Jsuser.name); // Output: "Akash"

// Access the Symbol property using square brackets
console.log(Jsuser[mySym]); // Output: "myjey1"


// --- Modifying Object Properties ---

// Change the value of the `age` property
Jsuser.age = 32; 
console.log(Jsuser);  // Age updated to 32

// Object.freeze(Jsuser); // Uncomment to prevent further modifications


// --- Adding Methods to Objects ---

// Add a greeting method to the object
Jsuser.greeting = function() {
    console.log("js user hello");
};

// Calling the method
console.log(Jsuser.greeting); // Output: [Function (anonymous)]  (function reference)
Jsuser.greeting(); // Output: "js user hello"

// Add another greeting method that uses object properties
Jsuser.greetingTwo = function() {
    console.log(`Hello from js ${this.name}`); // 'this' refers to the object itself
};
Jsuser.greetingTwo(); // Output: "Hello from js Akash"
