// Functions in JavaScript: Examples and Explanations

// --- Basic Function Declaration and Invocation ---

// Function with no parameters or return value
function sayMyName() {
    console.log("Hitesh");
}

// Uncomment to call the function:
// sayMyName(); // Output: "Hitesh"


// --- Functions with Parameters ---

// Function with two parameters, but no explicit return
function addTwoNumbers(num1, num2) {
    console.log(num1 + num2); // Performs addition, but doesn't return the result
}

addTwoNumbers(3, 4);       // Output: 7 (numbers added)
addTwoNumbers(3, "4");    // Output: "34" (string concatenation due to implicit type conversion)

const res = addTwoNumbers(5, 7); 
console.log(res);  // Output: 12 (logged from within the function) 
                   //         undefined (the function itself doesn't return a value)


// --- Functions with Return Values ---

// Function with parameters and a return statement
function addNumbers(num1, num2) {
    return num1 + num2; // Calculates and returns the sum
}

const result = addNumbers(4, 6); 
console.log("Result:", result); // Output: "Result: 10" (the returned value is used)


// --- Functions and String Manipulation ---

// Function that creates a login message based on the username
function loginMessage(username) {
    return `${username} just logged in`;
}

// Calling the function doesn't display the result by default
loginMessage("Akash Thakre"); 

// You need to log or use the returned value
console.log(loginMessage("Akash Thakre")); // Output: "Akash Thakre just logged in"

// Calling without an argument leads to "undefined" in the message
// console.log(loginMessage()); // Output: "undefined just logged in"


// --- Functions with Input Validation and Early Return ---

// Function that checks for a username before creating a login message
function loginMessage(username) {
    if (!username) { // If username is undefined, null, or an empty string...
        console.log("Please enter a username");
        return;       // Stop execution and return (don't proceed to the next line)
    }
    return `${username} just logged in`;
}

// Calling without an argument triggers the validation check
console.log(loginMessage()); // Output: "Please enter a username" (no login message)
