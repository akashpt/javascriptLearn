// More on Functions in JavaScript

// --- Rest Parameters: Gathering Arguments into an Array ---

// Function using rest parameters (...args) to accept an arbitrary number of arguments
function calculateCartPrice(...num1) {
    return num1; // The rest parameter collects all arguments into an array
}

console.log(calculateCartPrice(200, 400, 500)); // Output: [200, 400, 500]


// Function with regular parameters and a rest parameter
function nextCalculateCartPrice(val1, val2, ...num1) {
    return num1;  // Only values after val1 and val2 are included in the rest parameter
}

console.log(nextCalculateCartPrice(200, 400, 500, 900)); // Output: [500, 900]


// --- Functions with Objects as Arguments ---

// Sample user object
const user = {
    username: "Akash",
    age: 50
};

// Function that processes object properties
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
}

//handleObject(user); // Output: "Username is Akash and age is 50"
handleObject({ username: "Akash", age: 30 }); // Output: "Username is Akash and age is 30"


// --- Functions with Arrays as Arguments ---

// Sample array of numbers
const myNewArr = [200, 400, 100, 600];

// Function that returns the second element (index 1) of an array
function returnSecondValue(getArray) {
    return getArray[1]; // Accessing array elements by index
}

console.log(returnSecondValue(myNewArr)); // Output: 400
