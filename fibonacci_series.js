function fibo_series(n) {
    let a1 = 0
    let a2 = 1
    let temp = 0
    let arr = [a1, a2]
    for (let i = 2; i < n + 2; i++) {
        a1 = a2
        a2 = temp + a2
        temp = a1
        arr[i] = a2
    }
    console.log(arr)
}
let n = 5
fibo_series(n)