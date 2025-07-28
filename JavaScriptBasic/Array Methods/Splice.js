const nums = [10,30,40,20,30];
console.log("Original Array:",nums);

// const newNums = nums.splice(1,3); //(Starting_index,Deleted_count)
// console.log("Deleted part of Array:",newNums);

// console.log("After Splice Array:",nums);


// const newNums2 = nums.splice(1,2,60); //(Starting_index,Deleted_count,Adding elements)
// console.log("Deleted part of Array:",newNums2);
// console.log("After Splice Array:",nums);

const newNums3 = nums.splice(1,2,60,35); //(Starting_index,Deleted_count,Adding_multiple_elements)
console.log("Deleted part of Array:",newNums3);
console.log("After Splice Array:",nums);


