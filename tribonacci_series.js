function tribo_series(n){
    let num1= 0
    let num2= 1
    let num3 = 1
    let temp = num1
    let arr = [num1,num2,num3]
    for(let i = 3;i<n;i++){
        num1 = num2
        num2 = num3
        num3 = temp + num1 + num2
        temp = num1
        arr[i] = num3    
    }
    return arr
}

console.log(tribo_series(10))