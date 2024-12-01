function Binaryconversion(n){
    let rem = 0
    let count = 0
    let num = 0
    let value = 0
    do {
        rem = n % 10
        value = rem * (2**count)
        num = num + value
        count++
        n = Math.floor(n/10)
    } while (n!=0);
    return num
}

let n = 1010
console.log(Binaryconversion(n))