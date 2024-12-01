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
function isPrimetilln(n) {
    for(let i = 0;i<=n;i++){
        let res = isPrime(i)
        if(res){
            console.log(i)
        }
    }
}
let res = isPrimetilln(n)
