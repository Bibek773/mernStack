/* 
Syntax
 let ar1 = [10,11,12, 13, 14,15]
 let ar = ar1.map((item, i)=>{

    })

*/
let ar1 = [10,11,12, 13, 14,15]
let ar = ar1.map((item, i)=>{
    return item;
})
console.log(ar);
console.log("-----------------------------------------------");


let arr = ar1.map((item, i)=>{
    return item*i;
})
console.log(arr);


console.log("-----------------------------------------------");



ar1.map((item, i)=>{
    console.log(item, i);
})



console.log("------------------------------------------------");



let a1 = [10, 20, 30]
let a2 = a1.map((item, i)=>{    
    return item*2;
})
console.log(a2);

console.log("--------------------------------------------------");




// [20,30,10,5]
let a3 = [20,30,10,5]
let a4 = a3.map((item, i)=>{
    if(item>=18)
        return item *2
    else
        return 0
})
console.log(a4);
console.log("--------------------------------------------------");
let number = [1,2,3,4,5,6,7,8,9]
let odd = number.map((item, i)=>{
    if(item%2==0)
        return 0
    else
        return item
})
console.log(odd);