// This keyword return empty object in vs code.
// const person = {
//     username : "shubham",
//     age : 17,   
//     greet : function greetting(){
//         console.log(this);
//         return(`Hello ${this.username}`)
//     }
// }

//console.log(person.greet())

const person = {
    username : "shubham",
    age : 17,   
    greet :()=>{
        console.log(this);
        return(`Hello ${this.username}`)
    }
}

console.log(person.greet())