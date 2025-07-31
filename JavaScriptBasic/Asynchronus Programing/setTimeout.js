// setTimeout() is a built in function that allows you to delay the
// the execution of a function by a specifies amount milli seconds


// console.log("1");
// setTimeout(() =>{
//     console.log("2");
// },5000);

// const time = setTimeout(() =>{
//     console.log("3");
// },3000);

// console.log("4")

let timeoutID = setTimeout(() => {
  console.log("This will not run");
}, 3000);

clearTimeout(timeoutID); // Cancels the timeout

