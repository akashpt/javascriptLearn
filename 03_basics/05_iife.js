// IIFEs (Immediately Invoked Function Expressions) in JavaScript

// --- Regular Function ---

// Function declaration
function chai() {
    console.log("DB Connected ONE");
}

chai(); // Calling the function as usual (Output: "DB Connected ONE")


// --- IIFE: Classic Syntax (Grouping Operator + Function Expression) ---

// IIFE with a named function expression
(function chaiTwo() {
    console.log("DB Connected TWO");
})(); // Note the parentheses at the end to immediately invoke the function (Output: "DB Connected TWO")


// --- IIFE: Modern Syntax (Arrow Function) ---

// IIFE with an anonymous arrow function
(() => {
    console.log("DB Connected THREE");
})();  // Immediately invoked (Output: "DB Connected THREE")


// --- IIFE with Parameters ---

// IIFE with a named arrow function and a parameter
((name) => {
    console.log(`DB Connected Four ${name}`);
})("PostgreSQL");  // Passing the argument "PostgreSQL" (Output: "DB Connected Four PostgreSQL")



/*
Explanation:

    IIFE: An IIFE is a function that runs as soon as it's defined. It's a way to create a local scope for variables and functions, preventing them from polluting the global scope.

    Classic Syntax:
        The function is wrapped in parentheses ().
        Another set of parentheses () is placed at the end to immediately call the function.

    Modern Syntax:
        You can use arrow function syntax for a more concise IIFE.
        The parentheses () around the arrow function are required to make it an expression (instead of a statement).

    Parameters:  You can pass arguments to IIFEs just like regular functions.

Why Use IIFEs?

    Encapsulation: IIFEs create private scopes, keeping variables and functions contained within them. This helps avoid naming conflicts and makes your code more modular.

    Data Privacy: You can use IIFEs to create private variables that are accessible only within the IIFE's scope.

    Avoiding Global Pollution: By not creating global variables, you prevent accidental modification of data and keep the global namespace clean.

Example Use Cases:

    Initialization Code: IIFEs are often used to run initialization code once when your script loads.
    Modules (Before ES Modules): IIFEs were a common pattern to implement modules before JavaScript had native module support.
    Libraries: Some JavaScript libraries use IIFEs to create their own isolated scopes.

Caveat: In modern JavaScript, with the availability of block-scoped variables using let and const, and the introduction of ES modules, the use of IIFEs has become less common. However, they are still a useful tool to have in your JavaScript arsenal.
*/