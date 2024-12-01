let n = 111

if(n>0){
    let value = n - 10
    if(value<0 || n == 0){
        console.log("It is a single digit")
    }else{
        console.log("It is not a single digit number")
    }
}else if(n<0){
    let value = n+10
    if(value>0){
        console.log("It is a single digit")
    }else{
        console.log("It is not a single digit number")
    }
}

if((n>=-99 && n<=-10)||(n>=10&&n<=99)){
    console.log("It is a double digit number")
}else{
    console.log("It is not a Double digit number")
}

if((n>=-999 && n<=-100) || (n>=100 && n<=999)){
    console.log("It is a triple digit number")
}else{
    console.log("It is not a triple digit number")
}