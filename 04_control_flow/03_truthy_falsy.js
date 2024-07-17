/**
 * 
 * 
 * Truthy Values:

In JavaScript, a truthy value is any value that is considered to be true when evaluated in a Boolean context (like an if statement or a logical operation).

Examples of Truthy Values:

    Non-zero numbers: 1, -10, 3.14, etc.
    Non-empty strings: "hello", "false", "0", etc. (Even the string "0" is truthy)
    Arrays: [] (even if empty)
    Objects: {} (even if empty)
    Functions: function() {}
    The symbol true

Falsy Values:

In contrast, a falsy value is a value that is considered to be false when evaluated in a Boolean context.

Examples of Falsy Values:

    The boolean false
    The number 0 (and -0)
    BigInt 0n (zero of the BigInt type)
    The empty string ""
    null
    undefined
    NaN (Not-a-Number)

Important Notes:

    Type Coercion: JavaScript automatically converts values to booleans in certain situations. This is called type coercion. For example, in the expression if (10) { ... }, the number 10 is coerced to true, and the code inside the if block will execute.

    Checking for Truthy/Falsy: You can use the double negation (!!) operator to explicitly check if a value is truthy or falsy:

 */


    const value = 10;
    console.log(!!value); // Output: true


    /**
     * 
     * 
     * Why Does This Matter?

            Understanding truthy and falsy values is important for:

    Conditional Statements: Conditions in if, else if, and while statements rely on truthy/falsy checks.
    Logical Operators: The && (AND) and || (OR) operators also rely on truthy/falsy checks.
    Default Values: You can use the || operator to provide default values:

     */

    const name = userInput || "Guest"; // If userInput is falsy, name will be "Guest"

    /**
     * 
     * Defensive Coding: Knowing falsy values helps you write more robust code by checking for 
     * potential errors (e.g., null values, empty strings) before performing operations.
     */

    const name2 = "";

if (name2) {
    console.log("Hello, " + name2 + "!");
} else {
    console.log("Please enter your name."); // This will be executed because 'name' is falsy
}


/*
Nullish Coalescing Operator (??):

The nullish coalescing operator (??) is a way to 
provide default values for variables that might be null or undefined. It works like this:
*/

result = leftOperand ?? rightOperand;
 //    If leftOperand is not null and not undefined, then result is assigned the value of leftOperand.
// If leftOperand is null or undefined, then result is assigned the value of rightOperand.

let user = null;
let name3 = user ?? "Guest";  // name will be "Guest" (user is null)

let count = 0; 
let displayCount = count ?? 10; // displayCount will be 0 (count is 0, but not null/undefined)


/**
 * 
 * Benefits:

    Simplified Default Values: Makes it much cleaner to provide default 
    values in cases where a variable might be intentionally set to null or undefined.
    Distinguishing from Falsy Values: The ?? operator only considers 
    null and undefined, unlike the logical OR (||) operator, which considers 
    all falsy values (0, "", false, etc.).
 */



    ///// Ternary Operator (? :): The ternary operator is a shorthand way 
    //to write a conditional expression. It has the following syntax:

    condition ? valueIfTrue : valueIfFalse;


    /**
     * 
     * 
     * Benefits:

        Conciseness: Provides a more compact way to express simple conditional logic.
        Readability (When Used Properly): Can improve readability in certain situations,
         especially when the conditions and results are short.


     */


         let userSettings = null;
        let defaultTheme = "light";

        let theme = userSettings?.theme ?? defaultTheme; // Optional chaining and nullish coalescing

        let isDarkMode = theme === "dark";
        let message = isDarkMode ? "Welcome to Dark Mode" : "Welcome to Light Mode"; // Ternary

        console.log(message); 
