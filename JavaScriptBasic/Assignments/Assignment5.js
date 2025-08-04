
// let Name = ["Shubham", "Karan", "Chinmay", "Prem"];
// console.log("Length of array:", Name.length);

// Name.push("Aryan");
// console.log("After push:", Name);

// Name.pop("Aryan");
// console.log("After pop:", Name);

// console.log("Includes 'Shubham'?", Name.includes("Shubham"));
// console.log("Includes 'Chinmay'?", Name.includes("Chinmay"));

// console.log("Index of 'Karan':", Name.indexOf("Karan"));
// console.log("Index of 'Prem':", Name.indexOf("Prem"));

// let friends = ["Siddesh", "Sahil"];
// console.log("Before concat:", Name);
// let allName = Name.concat(friends);
// console.log("After concat:", allName);

// let moreNames = [...Name, "Siddesh", "Sahil"];
// console.log("Using spread operator:", moreNames);

// let longNames = allName.filter(Name => Name.length <= 5);
// console.log("Filter (length ≤ 5):", longNames);




// const person = {
//     userName: "Shubham",
//     age: 18,
//     isLoggedIn: true
// };
// console.log(typeof person);
// console.log(typeof {});

// console.log("Object Keys:");
// console.log(Object.keys(person));

// console.log("Object Values:");
// console.log(Object.values(person));

// console.log("Accessing Properties:");
// console.log(person.userName);
// console.log(person["userName"]);

// console.log("Modifying Properties:");
// person.userName = "Karan";
// person.age = 20;
// console.log(person);

// console.log("Adding New Property:");
// person.email = "karan@gmail.com";
// console.log(person);

// console.log("Freezing Object:");
// Object.freeze(person);
// person.age = 22;
// console.log(person);

// console.log("Checking Property Existence:");
// console.log(person.hasOwnProperty("location"));

// console.log("Object.entries() – Array of Arrays:");
// console.log(Object.entries(person));

// console.log("Merging Multiple Objects:");
// const Obj1 = {
//     name: "Shubham",
//     age: 21,
//     email: "shubham@gmail.com"
// };

// const Obj2 = {
//     name: "Karan",
//     age: 22,
//     email: "karan@gmail.com"
// };

// const Obj3 = {
//     name: "Sahil",
//     age: 23,
//     email: "sahil@gmail.com"
// };

// const allObject = { ...Obj3, ...Obj2, ...Obj1 };
// console.log(allObject);

// console.log("Object Destructuring:");
// const { name, email, age } = Obj3;
// console.log(email);




let name1 = "Shubham";
let name2 = new String("Shubham");
let num1 = 101;
let num2 = new Number(100);

console.log(typeof name1);
console.log(typeof name2);
console.log(typeof num1);
console.log(typeof num2);

let name3 = "   Shubham   ";
console.log("Length of string:", name3.length);

let name4 = "Shubham";
console.log("Uppercase:", name4.toUpperCase());
console.log("Lowercase:", name4.toLowerCase());

let name5 = "Shubham";
console.log("Index of 'bha':", name5.indexOf("bha"));
console.log("Char at index 2:", name5.charAt(2));
console.log("Index of 'm':", name5.indexOf("m"));

let name6 = "   Shu bham   ";
console.log("Trimmed length:", name6.trim().length);

let name7 = "stack";
console.log("Replace 'a' with 'o':", name7.replace("a", "o"));

let name8 = "Shubham";
console.log("Includes 'u'?", name8.includes("u"));
console.log("Includes 'sha'?", name8.includes("sha"));

let name9 = "Shubham%Karan%Sahil";
console.log("Split by '%':", name9.split("%"));

let name10 = "Shubham";
console.log("Substring (1, 5):", name10.substring(1, 5));
console.log("Substring (2, 6):", name10.substring(2, 6));

console.log("Slice (-4, 5):", name10.slice(-4, 5));
console.log("Slice (3, 6):", name10.slice(3, 6));

let name11 = "SHUBHAM";
console.log("slice(2, 6):", name11.slice(2, 6));
console.log("substring(2, 6):", name11.substring(2, 6));

let name12 = "Shubham";
console.log("Primitive String:", name12);
const name13 = new String("Shubham");
console.log("Object String:", name13);
