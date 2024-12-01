// let n = -1
// let isNegative = false
// if(n<0){
//     n = -1*n
//     isNegative = true
// }
// let last_num = n%10
// let first_num = 0
// do{
//     n = Math.floor(n/10)
//     if(n>0 && n<10){
//         if(isNegative){
//             first_num = first_num + (-(n))
//         }else{
//             first_num = first_num + n
//         }
//     }
//     // console.log(n)
// }while(n != 0)

// let sum = (last_num + first_num)
// // console.log(last_num,first_num)
// console.log(`The sum of extreme is ${sum}`)

let n = 999
function external_sum(n) {
    let sum = 0
    let isNegative = false
    if (n < 0) {
        isNegative = true
        n = -1 * n
    }
    let temp = n
    do {
        let rem = n % 10
        if (n == temp || n < 10) {
            if (isNegative && n < 10) {
                sum = sum - rem
            }
            else {
                sum = sum + rem
            }
        }
        n = Math.floor(n / 10)
    } while (n != 0)
    return sum
}
let res = external_sum(n)
console.log(res)