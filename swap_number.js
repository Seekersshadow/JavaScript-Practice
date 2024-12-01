let a = 10
let b = 20
function swap_number(a,b){
    let temp = a 
    a = b
    b = temp
    return [a,b]
}
[a,b] = swap_number(a,b)
console.log(a,b)