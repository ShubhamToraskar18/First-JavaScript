const studentInfo = {
    userName : "Shubham",
    age : 17,
    isLoggedIn : true
}
console.log(typeof studentInfo);
console.log(Object.keys(studentInfo))
console.log(Object.values(studentInfo))
console.log(studentInfo.userName);
console.log(studentInfo["userName"])
console.log(studentInfo.userName="Raj");
studentInfo.age=20
console.log(studentInfo)
studentInfo.Email = "Raj@gmail.com";
console.log(studentInfo)

//Object.freeze(studentInfo)
studentInfo.age=21
console.log(studentInfo)
studentInfo.ID = "101";
console.log(studentInfo)

console.log(studentInfo.hasOwnProperty("userName"))
console.log(studentInfo.hasOwnProperty("username"))
console.log(Object.entries(studentInfo))

const obj1 = {
    age : 17
}

const obj2 = {
    names : "Shubham" 
}

const obj3 = {
    Email : "shubham@gmail.com"
}
 const allObject = Object.assign({},obj1,obj2,obj3)
 console.log(allObject)

 const allobject2 = {...obj1, ...obj2, ...obj3}
 console.log(allobject2);



