let str = "AZZZZZ"
function countCapital(str){
    let count = 0
    str = str.trim()
    for(let i = 0;i<str.length;i++){
        if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
            count++
        }
    }
    return count
}
console.log(countCapital(str))