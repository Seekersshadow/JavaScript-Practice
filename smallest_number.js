let n = 0
let min_num = Infinity
let rem = 0
if(n<0){
    n = -1* n
}

do{
    rem = n % 10
    n = Math.floor(n/10)
    if(rem < min_num){
        min_num = rem
    }
}while(n != 0)

console.log(min_num)