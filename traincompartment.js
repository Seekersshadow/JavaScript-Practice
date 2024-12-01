// ^ Given a seat number in the sleeper coach predict the seating arrangement
// ! Assume there are only 80 seats in the compartment
// ! There are 8 seats in each compartment and number starting from side lower and the sequence is side lower, side upper,lower, middle,upper,lower, middle,upper  

let seat_no = 27
if(seat_no % 8 ==0 ){
    console.log("Upper")
}else if(seat_no % 8 == 1 ){
    console.log("Side Lower")
}else if(seat_no % 8 == 2 ){
    console.log("Side Upper")
}else if(seat_no % 8 == 3 ){
    console.log("Lower")
}else if(seat_no % 8 == 4 ){
    console.log("Middle")
}else if(seat_no % 8 == 5 ){
    console.log("Upper")
}else if(seat_no % 8 == 6 ){
    console.log("Lower")
}else if(seat_no % 8 == 7 ){
    console.log("Middle")
}