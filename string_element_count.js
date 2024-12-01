function countChar(str){
    let count = 0
    str = str.trim()
    for(let i = 0; i<str.length;i++){
        count++
        console.log(str.at(i))
    }
    return count
}
let str = "Hello"
console.log(countChar(str))