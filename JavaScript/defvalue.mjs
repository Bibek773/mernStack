/*
  Default Values
  Topic: using default function parameters when arguments are missing.
*/

const showStudent = (firstName = "Hari", lastName = "Ghimire", rollNumber = 9) => {
  console.log("Student:", firstName, lastName, "Roll:", rollNumber);
};

showStudent("Bibek");
showStudent("Bibek", "Ghimire", 12);
showStudent();
