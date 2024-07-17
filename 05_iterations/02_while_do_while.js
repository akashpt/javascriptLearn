// While and Do...While Loops in JavaScript

// --- While Loop ---
// Structure: while (condition) { code }

// Initialize a counter variable
let index = 0; 

// Loop until the condition becomes false
while (index <= 10) {  
    console.log(`Value of index is ${index}`);  // Print the current index
    index = index + 2;  // Increment the index by 2 in each iteration
}
// Output:
// Value of index is 0
// Value of index is 2
// Value of index is 4
// Value of index is 6
// Value of index is 8
// Value of index is 10


// --- While Loop for Iterating Over an Array ---

// Declare an array of strings
let myArray = ["flash", "javelin", "superman", "batman"];

// Initialize an index variable
let myArr = 0;

// Loop through the array until the index reaches the array's length
while (myArr < myArray.length) {
    console.log(`Value is ${myArray[myArr]}`); // Access array element using the index
    myArr++;   // Increment the index to move to the next element
} 
// Output:
// Value is flash
// Value is javelin
// Value is superman
// Value is batman


// --- Do...While Loop ---
// Structure: do { code } while (condition); (Note: the loop runs at least once)

let score = 1; 

do {
    console.log(`Score is ${score}`);  // Print the score
    score++; // Increment the score
} while (score <= 10);
// Output:
// Score is 1
// Score is 2
// Score is 3
// ...
// Score is 10



/**
 * 
 * 
 * 
 * 
 * Key Differences Between while and do...while:

    Execution Guarantee: A do...while loop guarantees that the code block inside the l
    oop will execute at least once, even if the condition is initially false. 
    This is because the condition is checked after the first iteration.

    Condition Placement: In a while loop, the condition is checked at the beginning of each iteration. 
    In a do...while loop, the condition is checked at the end.

Choosing the Right Loop:

    while: Use a while loop when you need to repeat code as long as a condition is true, 
    and you don't want the code to run if the condition is initially false.
    
    do...while: Use a do...while loop when you need to ensure that the code inside 
    the loop is executed at least once, even if the condition is false to begin with.
    
    for: Use a for loop when you know the exact number of iterations in advance.


 */