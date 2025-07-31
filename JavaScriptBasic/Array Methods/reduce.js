//Syntax: const variable_name = array_name.reduce(function(accumulator,current_value)){
//logic of code
//},default name;

//reduce() : reduce array to single value 
//return single value
//does not mutate original array
//aggregate data

const arr1 = ["a","b","a","c","d"]
const count = arr1.reduce((acc,arr1) => {
    acc[arr1] = (acc[arr1] || 0) +1;
    //console.log(acc);
    return acc;
},{});

console.log(count)

const arr2 = [1,2,3,4,5]
const count2 = arr2.reduce((acc,arr2) => {
    return acc+arr2  
},0);
console.log(count2)

const arr3 = [1,2,3,4,7]
const count3 = arr3.reduce((acc,arr3) => {
    console.log(acc+5)
    console.log(arr3+5) 
},0);
console.log(count3)
