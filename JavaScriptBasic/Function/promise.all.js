// const promise1 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log("Task 1 completed!");
//         resolve();
//     },3000);
// }); 

// const promise2 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log("Task 2 completed!");
//         reject();
//     },3000);
// }); 

// const promise3 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log("Task 3 completed!");
//         resolve();
//     },3000);
// });

// Promise.all([promise1, promise2, promise3]).then(() => {
//     console.log("Promise Done");
// }).catch(() => {
//     console.log("Catch Done");
// }).finally(() => {
//     console.log("Finally");
// });


const promise1 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("Task 1 completed");
    }, 1000);
});

const promise2 = new Promise((reject, resolve) =>{
    setTimeout(() =>{
        resolve("Task 2 completed");
    }, 1000);
});

const promise3 = new Promise((reject, resolve) =>{
    setTimeout(() =>{
        reject("Task 3 completed");
    }, 1000);
});

Promise.all([promise1, promise2, promise3])
.then((results)=>{
     console.log("All Promises resolved!");
     console.log(results);
}).catch((error) => {
    console.log("One Promise Rejected");
    console.log(error);
}).finally(() =>{
    console.log("Code Executed");  
})