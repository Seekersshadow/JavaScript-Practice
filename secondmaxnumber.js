let a = 2
let b = 5
let c = 20

if((a>b&&a<c)||(a<b&&a>c)){
    console.log(`${a} is Second Maximum Number`)
}
else if((b>a&&b<c)||(b<a&&b>c)){
    console.log(`${b} is Second Maximum Number`)
}
else{
    console.log(`${c} is Second Maximum Number`)
}