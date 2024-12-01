let n = 9999
function internal_sum(n) {
    let sum = 0
    let temp = n
    do {
        let rem = n % 10
        if (n == temp || n < 10) {
            n= Math.floor(n/10)
            continue;
        }else{
                sum = sum + rem
        }
        n = Math.floor(n / 10)
    } while (n != 0)
    return sum
}
let res = internal_sum(n)
console.log(res)