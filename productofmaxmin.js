let a = 10
let b = 5
let c = 20
let max = 0
let min = 0

if(a>b && a>c){
    max = a
}else if(b>a && b>c){
    max = b
}else{
    max = c
}
if(a<b && a<c){
    min = a
}else if(b<a && b<c){
    min = b
}else{
    min = c
}
let product = max*min
console.log(`The product of maximum number = (${max}) and minimum number = (${min}) is ${product} `)