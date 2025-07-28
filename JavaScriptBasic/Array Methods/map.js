// Map()
// Transform each element
// Return new array
// does not mutate original array
const array = [1,2,3,4,5]
const newArr = array.map((val) => (val+10));
console.log(newArr)

const Strings = ["Sai", "Ram", "Shyam", "Ishwar"];
const newStrings = Strings.map((val)=>(val.toLowerCase()))
console.log(newStrings)
