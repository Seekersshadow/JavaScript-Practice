/**
 * Question: 
 * Write a JavaScript function `isAscending(a, b, c)` that checks whether three numbers `a`, `b`, and `c` 
 * are in non-decreasing order (ascending order or equal). If all three numbers are equal, log a message 
 * `"The Numbers are equal"` to the console. The function should return `true` if the numbers are in 
 * non-decreasing order and `false` otherwise. Test the function with `a = -1, b = -1, c = -1`.
 */

function isAscending(a, b, c) {
    if (a == b && b == c) {
        console.log("The Numbers are equal")
    }
    else if (a <= b && b <= c) {
        return true
    }
    return false
}
let a = -1
let b = -1
let c = -1
console.log(isAscending(a, b, c))
