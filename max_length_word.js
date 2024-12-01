function maxWord(str){
    let count = 0
    let max_word_length = 0
    for(let i = 0;i<str.length;i++){
        if(str.charCodeAt(i) != 32){
            count++
        }else{
            if(max_word_length<count){
                max_word_length = count
                count = 0
            }
        }
    }
    return max_word_length
}
let str = "How beautiful is the sky"
console.log(maxWord(str))