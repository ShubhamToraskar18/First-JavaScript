// setInterval() is a js function used to repeatedly execute a specific function
// or code block at fixed interval.

// clearInterval is a js function is used to stop the ececution of a function that was previously
// set to repeat at interval using setInterval.

// setInterval(() =>{
//     console.log("Hello");
// },2000);

let count = 0;
const timer = setInterval(() =>{
    console.log(count);
    count++;

    if(count>5){
        clearInterval(timer)
    }
},2000);