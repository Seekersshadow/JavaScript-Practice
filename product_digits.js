let n = -123
let isNegative = false
let prod = 1
let rem = 0
if(n<0){
    n = -1* n
    isNegative = true
}
do{
    rem = n % 10
    n = Math.floor(n/10)
    if(isNegative){
        if(n<10){
            n = -1 * n
        }
    }
    prod *= rem
}while(n != 0)

console.log(prod)