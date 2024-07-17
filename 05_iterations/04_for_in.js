// Object and Array Iteration in JavaScript: For...In Loops

// --- Object Iteration ---

// Object with game titles
const games = {
    'game1': "NFS",
    'game2': "GOW"
};

// Iterate over the object's keys using `for...in`
for (const key in games) { 
    console.log(games[key]);  
    // Output:
    // NFS
    // GOW
}

// --- Array Iteration (Not Ideal) ---

// Array of programming languages
const programming = ["JS", "PHP", "CPP"];

// Iterate over the array indices using `for...in` (not recommended for arrays)
for (const key in programming) {
    console.log(programming[key]);
    // Output:
    // JS
    // PHP
    // CPP
}

/*
Explanation:

    for...in Loop: This loop is primarily designed to iterate over the keys (or properties) of an object.  However, it can also be used to iterate over array indices, but this is generally discouraged due to potential issues.

    Object Iteration:
        The loop iterates over the keys of the games object (game1, game2).
        Inside the loop, games[key] accesses the value associated with each key, printing the game titles.

    Array Iteration (Not Recommended):
        The loop iterates over the indices of the programming array (0, 1, 2).
        While it technically works, using for...in for arrays can be problematic because:
            It might iterate over inherited properties from the array's prototype if they are enumerable.
            The order of iteration is not guaranteed for arrays.

Alternative for Array Iteration:

The for...of loop is the preferred way to iterate over arrays in modern JavaScript:
JavaScript

for (const language of programming) {
    console.log(language);
}



    */