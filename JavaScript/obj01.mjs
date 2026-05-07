/*
  Objects
  Topic: storing related values with clear property names.
*/

const student = {
  name: "Bibek",
  weightKg: 64,
  isMarried: true,
};

console.log("Original object:", student);
console.log("Student name:", student.name);

student.isMarried = false;
console.log("After updating isMarried:", student);

student.address = "Ilam";
console.log("After adding address:", student);

delete student.isMarried;
console.log("After deleting isMarried:", student);
