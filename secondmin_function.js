function findSecondMin(n){
    let min = Infinity
    let second_min = Infinity
    let rem = 0
    do{
        rem = n%10
        if(rem < min){
            second_min = min
            min = rem
        }else if(rem < second_min && rem != min){
            second_min = rem
        }
        n = Math.floor(n/10)
    }while(n!=0)
    return second_min == Infinity ? -1 : second_min
}
let n = 4321
console.log(findSecondMin(n))