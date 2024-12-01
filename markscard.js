let mth = 90
let sc = 95
let his = 85

if(mth<35 || sc <35 || his<35){
    console.log("You Havent secured the passing marks")
}
else{
    console.log("You have passed")
    let avg = (mth+sc+his)/3
    if(avg>=90){
        console.log("Congratulations You have secured destinction!!!!")
    }
    else if(avg>=80 && avg<90){
        console.log("Congratulations You have secured FCD!!!!")
    }
    else if(avg>=70 && avg<80){
        console.log("Congratulations You have secured First Class!!!!")
    }
    else if(avg>=50 && avg<70){
        console.log("Congratulations You have secured Second Class!!!!")
    }
    else if(avg>=35 && avg<50){
        console.log("Congratulations You have pased in all your subjects!!!!")
    }
}