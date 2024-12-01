let n = 1234
let reverse = 0
let rem = 0 
do{
    rem = n % 10
    reverse = reverse * 10 + rem
    n = Math.floor(n/10)
}while(n!=0)

console.log(reverse)