// Control Flow in JavaScript: Examples and Explanations

// --- if Statements ---

const isUserLoggedIn = true;
const temperature = 41;

// Basic `if` statement: Executes if the condition is true
if (isUserLoggedIn) {
    console.log("Executed"); // Output: "Executed" (since isUserLoggedIn is true)
}

// `if...else` statement: Executes one block if true, another if false
if (temperature === 50) {
    console.log("less than 50"); 
} else {
    console.log("greater than 50"); // Output: "greater than 50" (since temperature is not 50)
}

// Nested `if...else` statement: Allows for more complex conditions
const score = 200;

if (score > 100) {
    const power = "fly"; // Variable defined within the block scope
    console.log(`User can ${power}`); // Output: "User can fly"
} // 'power' is not accessible outside this block


// --- else if Statements ---

// Chaining multiple conditions
const balance = 1000;

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200"); // Output: "less than 1200" (only this condition is met)
}


// --- Logical Operators: Combining Conditions ---

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedFromEmail = true;

// AND operator (&&): All conditions must be true
if (userLoggedIn && debitCard && 2 == 2) { 
    console.log("Allow to buy course"); // Output: "Allow to buy course"
}

// OR operator (||): At least one condition must be true
if (loggedInFromGoogle || loggedFromEmail) {
    console.log("Allow to login");     // Output: "Allow to login"
}
