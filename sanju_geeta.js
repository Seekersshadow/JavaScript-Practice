let num = -20
if(num>0){
    if(num%3==0 || num%5==0){
        if(num%5==0){
            if((num%3==0 && num%5==0)){
                console.log("Sanju weds Geeta")
            }else{
                console.log("Geeta")
            }
        }else{
            console.log("Sanju")
        }
    }else{
        console.log("Marriage not possible")
    }
}else{
    console.log("Please enter positive and non zero number")
}