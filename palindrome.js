function palindrome(n) {
    let reverse = 0
    let rem = 0
    do {
        rem = n % 10
        reverse = reverse * 10 + rem
        n = Math.floor(n / 10)
    } while (n != 0)
    if(reverse == temp){
        console.log("It is a Palindrome number")
    }else{
        console.log("It is not a Palindrome number")
    }
}

let n = 120
let temp = n
palindrome(n)