let n = 1235
function external_internal_sum(n) {
    let external_sum = 0
    let internal_sum = 0
    let temp = n
    do {
        let rem = n % 10
        if (n == temp || n < 10) {
                external_sum = external_sum + rem
        }else{
                internal_sum = internal_sum + rem
        }
        n = Math.floor(n / 10)
    } while (n != 0)
    return [external_sum,internal_sum]
}
let internal_no = external_internal_sum(n)[1]
let external_no = external_internal_sum(n)[0]
if(external_no>internal_no){
    console.log("It is Xylem Number")
}else{
    console.log("It is a Pholem Number")
}