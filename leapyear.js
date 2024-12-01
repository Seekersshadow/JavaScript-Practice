let year = 2000
if (year % 4 != 0) {
    console.log(`${year} is not a leap Year`)
}
else {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                console.log(`${year} is a leap Year`)
            }
            else {
                console.log(`${year} is not a leap Year`)
            }
        }
        else {
            console.log(`${year} is a leap Year`)
        }
    }
}