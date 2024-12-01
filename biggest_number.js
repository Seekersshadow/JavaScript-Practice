let n = -123333
let max_num = 0
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
}while(n != 0)

console.log(max_num)