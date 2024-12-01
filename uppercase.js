function uppercase(str){
    str = str.trim()
    let value = 0
    let res_str = ""
    for(let i=0;i<str.length;i++){
        if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
            value = (str.charCodeAt(i) - 97)+65
            res_str = res_str + String.fromCharCode(value)
        }else{
            res_str = res_str + str.charAt(i)
        }
    }
    return res_str
}
let str = "hello"
console.log(uppercase(str))

export default uppercase