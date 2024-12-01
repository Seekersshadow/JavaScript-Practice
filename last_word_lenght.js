function lastWordCount(str){
    str = str.trim()
    let count = 0
    for(let i = str.length-1;i>0;i--){
        if(str.charCodeAt(i) != 32){
            count++
        }else{
            break
        }
    }
    return count
}
let str = "Hi I am rohit"
console.log(lastWordCount(str))