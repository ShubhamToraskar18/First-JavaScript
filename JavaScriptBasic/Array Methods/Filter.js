// Filter() selects elements based on condition
//does not mutate original array
const array = [10,20,30,40,50]
const newArr = array.filter((val) => {
    return val>25
});
console.log(newArr)

const str = ["Shubham", "Raj", "Veer", "Chinmay"]
const newArr2 = str.filter((val) => (val.length>4));
console.log(newArr2)

