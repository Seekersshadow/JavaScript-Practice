function lowercase(str){
    str = str.trim()
    let value = 0
    let res_str = ""
    for(let i=0;i<str.length;i++){
        if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
            value = (str.charCodeAt(i) - 65)+97
            res_str = res_str + String.fromCharCode(value)
        }else{
            res_str = res_str + str.charAt(i)
        }
    }
    return res_str
}
let str = "HELLO"
console.log(lowercase(str))
// console.log("Z".charCodeAt())