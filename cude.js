let n = 2
let cube = n*n*n
console.log(cube)

let loopcube = 1
for(let i = 0;i<3;i++){
    loopcube *= n
}
console.log(loopcube)

let whilecube = 1
let i = 1
while(i<=3){
    whilecube *= n
    i++
}
console.log(whilecube)