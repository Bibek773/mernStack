// spread operator is a warpper opener {...}

// array spread operator
let arr1 = [1, 3, 5, 7,9 ]
let arr2 = [2,4,6,8]
let arr3 = [0, ...arr1]

console.log(arr3)
console.log("-----------------------------------------------------");
console.log(...arr1, ...arr2); // not actually a good manner to use spread operator in console.log


console.log("-----------------------------------------------------");console.log("-----------------------------------------------------");
// object spread operator

let info1 = { name: "bibek", age: 20}
let info2 ={address:"ilam"}
let info = { ...info2, ...info1}


console.log(info)

