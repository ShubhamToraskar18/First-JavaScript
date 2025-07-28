const nums = [10,20,30,40,50];
console.log("Original Array:",nums);

const newNums = nums.slice(1);
console.log("New Array:",newNums);

console.log("After Slice Array:",nums);

const newNums2 = nums.slice(1,4);
console.log("New Array:",newNums2);

const newNums3 = nums.slice(4,2);
console.log("Slice(4,2) Array:",newNums3);

const newNums4 = nums.slice(-3);
console.log("Negative Index Array:",newNums4);

const newNums5 = nums.slice(-3,-1);
console.log("Negative Index Array:",newNums5);

const newNums6 = nums.slice(-2,-5);
console.log("Negative Index Array:",newNums6);




