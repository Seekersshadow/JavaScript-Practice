let evensum = 0
let oddsum = 0
let n = 8

for(let i =0;i<=n;i++){
    if(i%2 == 0){
        evensum += i;
    }else{
        oddsum += i;
    }
}

console.log(`The Even Sum is ${evensum}`)
console.log(`The Odd Sum is ${oddsum}`)