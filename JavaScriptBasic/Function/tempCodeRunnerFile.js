const person = {
    userName : "Shubham",
    age : 17,
    greet : function(){
        return (`hello world, ${this.userName}`);
    }
}
console.log(person)
console.log(person.greet());