const obj1 = {
    name1 : "Shubham",
    age : 17
};

const obj2 = {
    email : "shubham@gmail.com"
}

const obj3 = {
    year : "Ty",
    name1 : "Karan"
}

const allObject = Object.assign({},obj3,obj2,obj1)
console.log(allObject)
const allobject2 = {...obj1, ...obj2, ...obj3}
console.log(allobject2);

//Object D-Stracture
const {name1, age, email, year} = allObject;
console.log(name1);
console.log(age);
console.log(email);
console.log(year);



