let n = 0
let temp = n
let loop = 0
// console.log(temp)
while(temp != 0){
    temp = Math.floor(temp/10)
    loop = loop +1
}
// console.log(loop)
let rem = 0
for(let i =0;i<loop;i++){
    rem = n%10
    n = Math.floor(n/10)
    console.log(rem)
}