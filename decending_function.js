function isAscending(a, b, c) {
    if (a == b && b == c) {
        console.log("The Numbers are equal")
    }
    else if (a >= b && b >= c) {
        return true
    }
    return false
}
let a = -1
let b = -1
let c = -1
console.log(isAscending(a, b, c))