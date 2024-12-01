let n = -365
let count = 0
if(n==0 || n<0){
    if(n==0){
        count = count +1
    }else{
        n = -1 * n
    }
} 
while(n!=0){
    n = Math.floor(n/10)
    count = count + 1
}
console.log(count)