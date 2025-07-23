// we can write a block of code once and use it many times without rewriting.
// Function name contain letters,digits,underscore, and dollar signs 
// (Same rules as Variable)

// Syntax:
//function fun_name(args,...){
//   BODY
//}

function PrintGreeting(name){
    let z = 10;
    console.log(`Hello, How are you ${name}`);
    return z;
    console.log(`Skip because of return statement has written before of console`)
}
console.log(PrintGreeting("Alworth"))
PrintGreeting("Chinmay")
PrintGreeting("Shubham")


