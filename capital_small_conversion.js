function capitalsmall(str){
    str = str.trim()
    let res_str = ""
    let value = 0
    for(let i = 0; i<str.length;i++){
        if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
            value = (str.charCodeAt(i) - 97)+65
            res_str = res_str + String.fromCharCode(value)
        }else if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
            value = (str.charCodeAt(i) - 65)+97
            res_str = res_str + String.fromCharCode(value)
        }else{
            res_str = res_str + str.charAt(i)
        }
    }
    return res_str
}
let str = "Hi I am Rohit"
console.log(capitalsmall(str))