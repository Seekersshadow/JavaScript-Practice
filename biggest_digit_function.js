let n = 0
let max_num = -Infinity
let rem = 0
function biggest_bigit(n) {
    if (n < 0) {
        n = -1 * n
    }
    do {
        rem = n % 10
        n = Math.floor(n / 10)
        if (rem > max_num) {
            max_num = rem
        }
    } while (n != 0)

    console.log(max_num)
}
biggest_bigit(n)
export default biggest_bigit