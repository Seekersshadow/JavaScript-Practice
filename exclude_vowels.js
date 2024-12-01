function excludeVowels(str){
    let res_str = ""
    let cap_str = str.toUpperCase()
    for(let i = 0;i<str.length;i++){
        if(!(cap_str.charAt(i) =="A" || cap_str.charAt(i) =="E" || cap_str.charAt(i) =="I" || cap_str.charAt(i) =="O" || cap_str.charAt(i) =="U")){
            res_str = res_str + str[i]
        }
    }
    return res_str
}
let str = "Rohit"
console.log(excludeVowels(str))