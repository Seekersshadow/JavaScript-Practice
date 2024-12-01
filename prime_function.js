let n = 2
function isPrime(n){
    if(n<=1) return false
    if(n==2) return true
    for(let i =2; i<Math.floor(n/2); i++){
        if(n%i==0){
            return false
        }
    }
    return true
}
let res = isPrime(n)
if(res){
    console.log("It is a prime number")
}else{
    console.log("it is not a prime number")
}