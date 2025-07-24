//Higher Order Loops in JS
//1. for..of :- It is used to loop through the elements of an iterable
// (Like Array, String, Map, set)...Not applicable for objects.
//2. For..in
//3. forEach
let name1 = "Shubham";
for (const names of name1){
    console.log(names);
}

console.log()
let name2 = "Shubham";
for (let names of name2){
    console.log(names);
}

console.log()
const arr = [1,2,3,4,5];
for (const a of arr){
    console.log(a)
}
