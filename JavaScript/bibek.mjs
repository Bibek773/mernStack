/*
  JavaScript Basics
  Topics: console.log(), comments, variables, constants, and data types.
*/

console.log("My name is Bibek Ghimire");

// A single-line comment explains one line of code.
/*
  A block comment can explain
  more than one line.
*/

// Common data types:
// number: 1, 2, 4.1, 6.5
// string: "hello", "1", "true"
// boolean: true, false

let firstName = "Bibek";
let lastName = "Ghimire";
let rollNumber = 230309;
let address = "Kathmandu";
let isStudent = true;

console.log("First name:", firstName);
console.log("Full name:", `${firstName} ${lastName}`);
console.log("Student info:", firstName, lastName, rollNumber, address, isStudent);

firstName = "Kebib";
console.log("Updated first name:", firstName);

const country = "Nepal";
console.log("Country:", country);

// country = "USA"; // This would throw an error because const cannot be reassigned.
