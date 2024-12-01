let n = 12344
if(n<0){
    n = -1 * n
}
// console.log(n)
let remove_last = Math.floor(n/10)
let sum = 0
let rem = 0
do {
    rem = remove_last%10
    remove_last = Math.floor(remove_last/10)
    sum = sum + rem
    // console.log(sum)
} while (remove_last>10);
console.log(`The sum of internal digits is ${sum}`)