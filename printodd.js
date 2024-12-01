let n = 0
let rem = 0
do{
    rem = n % 10
    n = Math.floor(n/10)
    if(rem %2 !=0){
        console.log(`${rem} is odd`)
    }
}while(n != 0)