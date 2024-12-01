function isDuckNumber(n) {
    if (n <= 0) return false;
    while (n > 0) {
        if (n % 10 === 0) {
            return true;
        }
        n = Math.floor(n / 10);
    }
    return false;
}

let n = 33
console.log(isDuckNumber(n))