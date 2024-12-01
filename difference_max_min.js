let n = -123333
let max_num = 0
let min_num = Infinity
let rem = 0
if(n<0){
    n = -1* n
}

do{
    rem = n % 10
    n = Math.floor(n/10)
    if(rem > max_num){
        max_num = rem
    }
    if(rem < min_num){
        min_num = rem
    }
}while(n != 0)
let prod = max_num * min_num
console.log(`The product of max-num= ${max_num} and min-number= ${min_num} is Product= ${prod}`)