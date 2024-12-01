let n = -1234
let isNegative = false
if(n<0){
    n = -1*n
    isNegative = true
}
let last_num = n%10
let first_num = 0
do{
    n = Math.floor(n/10)
    if(n>0 && n<10){
        if(isNegative){
            first_num = -(n)
        }else{
            first_num = n
        }
    }
    // console.log(n)
}while(n != 0)

let sum = (last_num + first_num)
// console.log(last_num,first_num)
console.log(`The sum of extreme is ${sum}`)