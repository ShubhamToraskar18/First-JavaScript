function greet(){
    return new Promise((resolve,reject) => {
        console.log("Hello World!");
        resolve("Resolved");
    });
}

console.log(greet());