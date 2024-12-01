let n = -123
let sum = 0
let temp = n
if(n<0){
    n = -1 * n
}
while(n != 0){
    rem = n % 10
    n = Math.floor(n/10)
    if(temp<0){
        if(n>0 && n<10){
            sum = sum - rem
        }
    }
    // console.log(rem)
    sum = sum + rem
}
console.log(sum)