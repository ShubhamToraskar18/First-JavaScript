// A promise is one of these states:
// 1. pending: initial state, neither fulfilled nor rejected
// 2. fulfiled: meaning that the operation was completed successfully.
// 3. rejected: meaning that the operation failed.

// Syntax:
// new Promise((resolve,reject) => {
    //logic
// }) 

// let greeting = new Promise((resolve,reject) =>{
//     console.log("Hello!")
//     resolve();
// });

// greeting.then(() => {
//     console.log("Bye!")
// });


// console.log();

// let greeting2 = new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         let isLoggedIn = false;
//         if (isLoggedIn === true){
//             console.log("User is logged In!");
//             resolve();
//         }else{
//             console.log("User is not Logged in!");
//             reject();
//         }
//     },3000);
// });

// greeting2.then(() => {
//     console.log("After Logged in!");
// }).catch(() => {
//     console.log("Error");
// }).finally(() => {
//     console.log("All Done!")
// });



console.log();

let login = new Promise((resolve,reject) =>{
    setTimeout(() => {
        let isLoggedIn = false;
        if (isLoggedIn === true){
            console.log("User is logged In!");
            resolve({"Name":"Shubham", "Pass":123});
        }else{
            console.log("User is not Logged in!");
            reject("Failed to login");
        }
    },3000);
});

login.then((User) => {
    console.log(User)
    console.log("After Logged in!");
}).catch((user2) => {
    console.log(user2)
    console.log("Error");
}).finally(() => {
    console.log("All Done!")
});

