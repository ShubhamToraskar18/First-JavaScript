//callback function is a function passed into another
// function as an arrgument, which is then invoked inside the outer 
// function to complete some kind of routine or action

function function1(Callback){
    console.log("Hello World!");
    Callback();
}

function function2(Callback){
    console.log("Good bye!");
}

function function3(){
    console.log("Sweet Dreams!");
}

function1(function(){
    function2(function3);
});