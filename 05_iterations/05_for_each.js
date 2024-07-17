// Array Iteration in JavaScript: forEach() Method

// --- Basic Usage of forEach() ---

const coding = ["JS", "PHP", "C", "R"];

// Iterate over each element using an arrow function
coding.forEach((item) => { 
    console.log(item); // Output: JS PHP C R (each element on a new line)
});


// --- Using a Separate Function with forEach() ---

const decode = ["A", "V", "C"];

// Define a function to be called for each element
function printMe(item) {
    console.log(item);
}

// Use forEach to apply the function to each array element
decode.forEach(printMe); // Output: A V C (each element on a new line)


// --- Accessing Index and Original Array in forEach() ---

const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    // ... (rest of the states)
];

// Iterate, accessing each item, its index, and the original array
states.forEach((item, index, arr) => {
    console.log(item, index); // Output: state name and its index
});


// --- Iterating over Objects within an Array ---

const myArray = [
    { ln: "js", lf: "jsss" },
    { ln: "java", lf: "java" },
    { ln: "pyt", lf: "p" }
];

// Iterate over objects and access their properties
myArray.forEach((item) => {
    console.log(item.lf); // Output: jsss java p
});

/**
 * 
 * 
 * Explanation of the forEach() Method:

    Purpose: The forEach() method is a powerful tool for iterating over arrays. It executes a provided callback function once for each array element.

    Syntax:
    JavaScript

    array.forEach(callbackFunction(currentValue, index, array));

    Use code with caution.

        callbackFunction: The function to be executed for each element. It can take up to three arguments:
            currentValue: The current element being processed.
            index: The index of the current element (optional).
            array: The original array being iterated (optional).

Key Points:

    In-Place Modification: The forEach() method doesn't return a new array. If you modify elements inside the callback function, the changes will be reflected in the original array.
    Order: It iterates over the array elements in order.
    Stopping Iteration: You cannot use break or continue to control the forEach loop. If you need this functionality, use a regular for loop instead.
    Flexibility: You can use arrow functions or regular functions as callbacks.
 */