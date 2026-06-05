let user = [
    {name: "bibek", age:20},
    {name: "ghimire", age:21},
    {name: "shrawan", age:22},
]
let arr = user.map((item, i)=>{
    return item.name
})
console.log(arr);
let age = user.map((item, i)=>{
    return item.age
})
console.log(age);
