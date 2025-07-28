const greet1 = () => "Hello!";

const square = num => num * num;

const add = (a, b) => a + b;

const isEven = num => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};


const person = {
  name: "Shubham",
  greet: () => {
    console.log("Hello, " + this.name); 
  }
};


const isPositive = num => num > 0;

const greet2 = name => console.log("Hello, " + name);

const getUser = (name, age) => ({ name, age });

const welcome = (user = "Guest") => "Welcome, " + user;

console.log(greet1());               
console.log(square(5));              
console.log(add(10, 15));            
console.log(isEven(4));             
console.log(isEven(7));              
person.greet();                      
console.log(isPositive(8));          
console.log(isPositive(-3));        
greet2("Shubham");                  
console.log(getUser("Shubham", 17));
console.log(welcome());              
console.log(welcome("Shubham"));     
