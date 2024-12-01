// function power_2(n){
//     for(let i = 0;i<n;i++){
//         if(2**i == n)
//         {
//             return true
//         }
//     }
//     return false
// }
// let n = 8
// console.log(power_2(n))

function isPower_2(n){
    while (n!=1) {
        if(n%2 == 0){
            n = Math.floor(n/2)
        }else{
            return false
        }
    }
    return true
}
let n = 46
console.log(isPower_2(n))