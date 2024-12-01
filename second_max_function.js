function findSecondMax(n){
    let max = -Infinity
    let second_max = 0
    let rem = 0
    do {
        rem = n%10
        n = Math.floor(n/10)
        if(rem>max){
            second_max =max
            max = rem
        }else if(max> rem && rem> second_max){
                second_max = rem
            }
        }while (n!=0);
    return second_max == -Infinity ? -1 : second_max
}
let n = 555
console.log(findSecondMax(n))