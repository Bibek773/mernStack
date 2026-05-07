/*
  Operators
  Topics: arithmetic, assignment, comparison, and logical operators.
*/

const firstNumber = 10;
const secondNumber = 2;

console.log("Addition:", firstNumber + secondNumber);
console.log("Subtraction:", firstNumber - secondNumber);
console.log("Division:", firstNumber / secondNumber);
console.log("Remainder:", firstNumber % secondNumber);
console.log("Multiplication:", firstNumber * secondNumber);
console.log("Power:", firstNumber ** secondNumber);

let score = 10;
score += 5;
console.log("After += 5:", score);

console.log("Greater than:", firstNumber > secondNumber);
console.log("Greater than or equal:", firstNumber >= secondNumber);
console.log("Strict equal:", firstNumber === secondNumber);
console.log("Less than or equal:", firstNumber <= secondNumber);
console.log("Not equal:", firstNumber !== secondNumber);

console.log("5 === '5':", 5 === "5");
console.log("5 == '5':", 5 == "5");

console.log("NOT true:", !true);
console.log("NOT false:", !false);

console.log("All true with &&:", true && true && true);
console.log("One false with &&:", true && true && false);

console.log("All false with ||:", false || false || false);
console.log("One true with ||:", true || false || false);
