function LogicNum(n1 ,n2){
    n1 = Number(n1)
    n2 = Number(n2)
    if(isNaN(n1) || isNaN(n2)){
        return("Enter a proper number")
    }
    return n1 + n2
}

console.log(LogicNum(12,"abc"))