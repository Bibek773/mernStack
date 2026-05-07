/*
  Arrays
  Topic: storing ordered values and changing them with array methods.
*/

const studentInfo = ["Bibek", "Ghimire", 21, false];

console.log("Original array:", studentInfo);
console.log("Fourth value:", studentInfo[3]);

studentInfo[0] = "Ram";
console.log("After updating first value:", studentInfo);

studentInfo.push("Nepal");
console.log("After push:", studentInfo);

studentInfo.pop();
console.log("After pop:", studentInfo);

studentInfo.unshift("Mr.");
console.log("After unshift:", studentInfo);

studentInfo.shift();
console.log("After shift:", studentInfo);
