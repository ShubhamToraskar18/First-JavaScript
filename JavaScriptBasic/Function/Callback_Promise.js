
//Normal Callback
function greet(callback){
    console.log("Hello!");
    callback();
}

function sayGoodbye(){
    console.log("Bye!");
}

greet(sayGoodbye);

console.log();

//Promise function
let greeting = new Promise((resolve,reject) =>{
    console.log("Hello!")
    resolve();
});

greeting.then(() => {
    console.log("Bye!")
});