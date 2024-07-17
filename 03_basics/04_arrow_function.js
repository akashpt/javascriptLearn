// Arrow Functions in JavaScript: Examples and Explanations

// --- Arrow Functions vs. Regular Functions (this keyword) ---
const user = {
    user: "akash",
    age: 50,
    welcome: function() {          // Regular function method
        console.log(`${this.user} welcome to website`);
        console.log(this);         // Refers to the object (user) itself
    }
};

user.welcome();        // Output: "akash welcome to website"  
user.user = "Thakre";  // Modify the user property
user.welcome();        // Output: "Thakre welcome to website"

console.log(this);     // Output: {} (In Node.js environment, `this` refers to the global object)


// Regular function: `this` depends on how the function is called
function chai() {
    let username = "hitesh";
    console.log(this.username); // Output: undefined (In non-strict mode, `this` would be the global object)
}
// chai(); // Uncomment to execute


// Arrow function: `this` is lexically bound (from the surrounding scope)
const chaiTwo = () => {
    let username = "hitesh";
    console.log(this.username); // Output: undefined (Arrow functions don't have their own `this`)
};
chaiTwo(); 


// --- Arrow Functions: Concise Syntax ---

// Arrow function with curly braces (explicit return)
const addTwo = (num1, num2) => {
    return num1 + num2;
};
console.log(addTwo(3, 4)); // Output: 7


// Arrow function with implicit return (single expression)
const addThree = (num1, num2) => num1 + num2; 
console.log(addThree(5, 5)); // Output: 10


// Arrow function returning an object (requires parentheses around the object)
// const addFour = (num1, num3) => { user: "akash " }; // Error: SyntaxError: Unexpected token ':'
const addFive = (num1, num2) => ({ user: "akash" });
console.log(addFive(9, 9)); // Output: { user: 'akash' }


// --- Regular Functions vs. Arrow Functions: Summary ---

/*
| Feature                | Regular Functions (`function`) | Arrow Functions (`=>`)           |
|------------------------|-----------------------------------|--------------------------------------|
| Syntax                 | More verbose                       | Concise (especially for single expressions) |
| `this` Binding         | Dynamic (`this` depends on how the function is called) | Lexical (`this` from the surrounding scope)   |
| Arguments Object       | Available (`arguments`)                | Not available                        |
| Constructor (`new`)    | Can be used as constructors         | Cannot be used as constructors       |
| Methods in Objects     | Often used for methods within objects | Generally preferred for standalone functions  |
*/
