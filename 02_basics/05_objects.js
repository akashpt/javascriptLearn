// Object Destructuring in JavaScript

// Example Object
const course = {
    courseName: "JS in HINDI",
    price: 999,
    courseTeacher: "Akash Thakre"
};

// Basic Destructuring: Extract values into variables with the same name
const { courseTeacher } = course; 
console.log(courseTeacher); // Output: "Akash Thakre"

// Destructuring with Aliases: Rename properties during extraction
const { courseTeacher: instructor } = course;
console.log(instructor); // Output: "Akash Thakre" (now using the new variable name)
