let a = 2
let b = 5
let c = 20

if((a>b&&a<c)||(a<b&&a>c)){
    console.log(`${a} is middle`)
}
else if((b>a&&b<c)||(b<a&&b>c)){
    console.log(`${b} is middle`)
}
else{
    console.log(`${c} is middle`)
}