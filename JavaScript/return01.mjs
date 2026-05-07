/*
  Return Values
  Topic: sending a value back from a function.
*/

const getMessage = () => {
  console.log("This line runs before return.");
  return "This value came from the function.";
};

const message = getMessage();
console.log("Returned message:", message);

const canVote = (age) => {
  if (age >= 18) {
    return "can vote";
  }

  return "cannot vote";
};

console.log("Age 17:", canVote(17));
console.log("Age 18:", canVote(18));

const getPronoun = (gender) => {
  if (gender === "male") {
    return "he";
  }

  if (gender === "female") {
    return "she";
  }

  return "they";
};

console.log("Male:", getPronoun("male"));
console.log("Female:", getPronoun("female"));
console.log("Other:", getPronoun("other"));
