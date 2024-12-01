function findMean(n){
    let rem = 0
    let sum = 0
    let count = 0
    do {
        rem = n % 10
        n = Math.floor(n/10)
        sum = sum + rem 
        count++
    } while (n != 0);
    let mean = sum/count
    return mean
}
let n = 1234
console.log(findMean(n))