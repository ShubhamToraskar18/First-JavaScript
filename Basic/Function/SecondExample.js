function addNum(num1 , num2){
    return num1 + num2;
}
console.log(addNum(10,"30"))

function AddNum(num1 , num2){
    let n1 = Number(num1)
    let n2 = Number(num2)
    return n1 + n2;
}
console.log(AddNum("abc","30")) //NaN - Not a number