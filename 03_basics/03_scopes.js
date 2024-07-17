// Scopes in JavaScript: Examples and Explanations

// --- Block Scope: Variables defined with let and const ---

// Global scope variable
let a = 300; 

if (true) { // Code block starts
    let a = 30;    // Variable 'a' is declared again within the block scope
    const b = 20;  // Variable 'b' is declared within the block scope
    console.log(a); // Output: 30 (refers to the 'a' within the block)
} // Code block ends

console.log(a); // Output: 300 (refers to the global 'a')


// --- Nested Scopes: Functions within Functions ---

// Outer function 'one'
function one() {
    const username = "Akash";

    // Inner function 'two'
    function two() {
        const website = "youtube";
        console.log(username); // Output: "Akash" (accesses variable from outer scope)
    }

    // console.log(website); // Error: 'website' is not accessible here (inner scope)

    two(); // Call the inner function
}

// one(); // Uncomment to execute the nested functions


// --- More on Block Scope ---

if (true) {
    const username = "akash";
    
    if (username === "akash") {
        const website = " youtube";
        console.log(username + website); // Output: "akash youtube"
    }
    
    // console.log(website); // Error: 'website' is not accessible here (inner block scope)
}

// console.log(username); // Error: 'username' is not accessible here (outer block scope)


// --- Function Scope and Hoisting ---

// Function Declaration: Hoisted (can be called before definition)
console.log(addOne(5)); // Output: 6

function addOne(num) {
    return num + 1;
}

// Function Expression: Not Hoisted (cannot be called before definition)
// addTwo(5); // Error: addTwo is not a function

const addTwo = function(num) { // Assigned to a variable (expression)
    return num + 2;
};
