let user1 = "Shubham";
const user2 = [10,20,30,40,50];
console.log(Array.isArray(user1));
console.log(Array.isArray(user2));
//Sting to Array conversion 
console.log(Array.from(user1));
console.log(Array.isArray(Array.from(user1)));


let string = "saideep";
let newArr = Array.from(string);
console.log(Array.isArray(newArr));

let num = 10; 
let num1 = 20;
let num2 = 30;
console.log(Array.of(num,num1,num2))
