// Dates and Time in JavaScript: Examples and Explanations

// --- Creating Date Objects ---

// Create a new Date object representing the current date and time
let myDate = new Date();
console.log(myDate); // Output: Current date/time (e.g., 2024-07-16T19:00:10.429Z)

// Convert Date object to a string representation
console.log(myDate.toString()); //  Formatted date/time string

// Get date portion (day, month, year) as a string
console.log(myDate.toDateString()); 

// Get locale-specific date string
console.log(myDate.toLocaleDateString()); // Format based on your locale settings

// Get locale-specific date and time string
console.log(myDate.toLocaleString()); 

// Confirm that myDate is indeed a Date object
console.log(typeof myDate); // Output: "object"


// Create a Date object for a specific date (January 23, 2024)
let myCreatedDate = new Date(2024, 0, 23); // Months are 0-based (0 = January)
console.log(myCreatedDate.toString()); // Formatted date/time string

// Create a Date object with specific date and time (January 23, 2024, 5:03 AM)
let myNewDate = new Date(2024, 0, 23, 5, 3);
console.log(myNewDate.toLocaleString()); 

// Create a Date object from a string
let nextSyntax = new Date("2024-09-18");
console.log(nextSyntax.toLocaleString()); 

// --- Working with Timestamps ---

// Get current timestamp (milliseconds since January 1, 1970)
let myTimestamp = Date.now();
console.log(myTimestamp);

// Get timestamp from a specific Date object
console.log(myCreatedDate.getTime());

// Convert current timestamp to seconds (approximately)
console.log(Math.floor(Date.now() / 1000));

// --- Getting Date Components ---

let newDateTwo = new Date();

// Get the day of the week (0 = Sunday, 1 = Monday, etc.)
console.log(newDateTwo.getDay()); 

// Get the month (0 = January, 1 = February, etc.)
console.log(newDateTwo.getMonth()); 


console.log(newDateTwo.toLocaleString('default', { weekday: "long" })); 
