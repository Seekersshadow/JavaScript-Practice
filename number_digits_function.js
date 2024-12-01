let n = 9
function count_number(n) {
    let count = 0
    do {
        n = Math.floor(n / 10)
        count++
    } while (n != 0)
    return count
}
console.log(count_number(n))