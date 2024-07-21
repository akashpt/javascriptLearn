const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Step 1: Multiply each number by 10
const timesTen = myNumbers.map((num) => num * 10); 

// Step 2: Add 1 to each of the multiplied results
const plusOne = timesTen.map((num) => num + 1); 

// Step 3: Filter to keep only numbers greater than or equal to 40
const newNums = plusOne.filter((num) => num >= 40);

console.log(newNums); // Output: [41, 51, 61, 71, 81, 91, 101]


/**
 * 
 * 
 * The map() method in JavaScript is a powerful tool for transforming arrays. Here's the gist of it:

Purpose:

    It creates a new array with the same length as the original array.
    It applies a function to each element of the original array.
    It returns the new array filled with the results of those function calls.
 */

/**
 * 
 * 
 * Why Use map()?

    Concise and Readable: It eliminates the need for manual loops, making your code cleaner and more expressive.
    Functional Style: It encourages a functional programming approach, focusing on what you want to do rather than how to do it.
    Immutability: It doesn't change the original array, keeping your data safe and predictable.
    Versatility: It can be used for various transformations, from simple calculations to complex manipulations.

Important Note: map() is not just for numbers. It works with any type of data stored in arrays, including strings, objects, or even other arrays.
 */