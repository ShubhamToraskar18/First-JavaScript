let username = "Shubham";
let user_name = new String("Karan");

let num1 = 101;
let num2 = new Number(101);

console.log(typeof(username));
console.log(typeof(user_name));

console.log(typeof(num1));
console.log(typeof(num2));

let user = "  Shubham  ";
console.log(user.length)
console.log(user.toUpperCase())
console.log(user.toLowerCase())
console.log(user.charAt(4))
console.log(user.indexOf("m"))
console.log(user.indexOf("Shubh"))
console.log(user.indexOf("Shubhm"))
console.log(user.trim())
console.log(user.trim().length)
console.log(user.replace(" " , "1")) // Replace only 1st occurance
console.log(user.includes("Shubh"))
console.log(user.includes("z"))
console.log(user.includes("hS")) // Sequence matters

let Name = "Shubham%Chinmay%Ram%Veer%Alworth"
console.log(Name.split("%"))

let users = "Shubham"
console.log(users.substring(2,5))
console.log(users.slice(2,5))

console.log(users.substring(-4,5));
console.log(users.slice(-4,-6));