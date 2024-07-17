// for loops

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
    
}


for (let i = 0; i < 10; i++) {
    console.log(`outer loop ${i}`);
    for (let j = 0; j < 10; j++) {
        console.log(`inner loop ${j} and outer loop ${i}`);
        
    }    // For Loops in JavaScript: Examples and Explanations

    // --- Basic For Loop ---
    // Structure: for (initialization; condition; update) { code }
    
    for (let i = 0; i < 10; i++) {
        const element = i; // Assign the current loop counter value to a constant 'element'
    
        if (element === 5) { 
            console.log("5 is the best number");  // Special message when i is 5
        }
        console.log(element); // Output the current value of the loop counter
    }
    
    // Output: 0, 1, 2, 3, 4, "5 is the best number", 5, 6, 7, 8, 9
    
    
    
    // --- Nested For Loops ---
    
    // Outer loop iterates from 0 to 9
    for (let i = 0; i < 10; i++) {
        console.log(`Outer loop: ${i}`); 
        // Inner loop iterates from 0 to 9 for each iteration of the outer loop
        for (let j = 0; j < 10; j++) {
            console.log(`Inner loop: ${j}, Outer loop: ${i}`); 
        }   
    }
    
    // Output:
    // Outer loop: 0
    // Inner loop: 0, Outer loop: 0
    // Inner loop: 1, Outer loop: 0
    // ... (and so on, for each combination of i and j)
    
    
    
    // --- For Loop for Multiplication Table ---
    
    // Outer loop (for each row in the table)
    for (let i = 0; i < 10; i++) {
        console.log(`Outer loop: ${i}`); // Print the row number
        
        // Inner loop (for each column in the table)
        for (let j = 1; j < 10; j++) {  // Note: start from 1 to avoid 0*anything = 0
            console.log(`${i} * ${j} = ${i * j}`); // Calculate and print the multiplication result
        }
    }
    
    // Output:
    // Outer loop: 0
    // 0 * 1 = 0
    // 0 * 2 = 0
    // ...
    // Outer loop: 1
    // 1 * 1 = 1
    // 1 * 2 = 2
    // ... (and so on, creating a multiplication table up to 9x9)
    
}

for (let i = 0; i < 10; i++) {
    console.log(`outer loop ${i}`);
    for (let j = 1; j < 10; j++) {
        console.log(i + '*' + j + '=' + i*j);
        
    }    
}