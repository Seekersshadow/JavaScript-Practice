let n = 1234
let min_num = Infinity
let rem = 0
function smallest_integer(n){
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
}
smallest_integer(n)

console.log(min_num)