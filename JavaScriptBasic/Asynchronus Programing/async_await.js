// Async and await in JavaScript are used to simplify handling asynchronous operation using promise.
// Async function always return a promise.
// The await key is used to wait for promise to resolve.
// Await doesn't block the entire program. It only pauses that specific Async function.

function greet(){
    return new Promise((resolve,reject) => {
        console.log("Hello World!");
        resolve("Resolved");
    });
}

console.log(greet());


console.log("\nAsync Function:")
async function hello() {
    return "Hello World";
}

console.log(hello());