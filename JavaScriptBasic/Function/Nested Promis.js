function greet1(){
    return new Promise((resolve,reject) => {
        console.log("Hello World!");
        resolve();
    });
}

function greet2(){
    return new Promise((resolve,reject) => {
        console.log("Good Night!");
        resolve();
    });
}

function greet3(){
    return new Promise((resolve,reject) => {
        console.log("Sweet Dreams!");
        resolve();
    });
}


greet1().then(greet2())
.then(greet3())
.finally(() =>{
  console.log("done");
});
