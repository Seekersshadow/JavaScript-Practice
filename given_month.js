// ^ Given the month number you need to print how many days the month has
let n = 12

if(n >= 1 && n<= 12){
    if(n == 1 || n == 3 || n == 5 || n == 7 || n==8 || n == 10 || n == 12){
        console.log("It has 31 days")
    }
    else if (n == 4 || n == 6 || n == 9 || n==11){
        console.log("It has 30 days")
    }
    else{
        console.log("It has 28 days or 29 days")
    }
}
else{
    console.log("Invalid Month Number")
}