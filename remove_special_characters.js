function removeSpecialChar(str){
    str = str.trim()
    let res_str = ""
    let value = 0
    for(let i = 0; i<str.length;i++){
        if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
            res_str = res_str + str.charAt(i)
        }else if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
            res_str = res_str + str.charAt(i)
        }else if(str.charCodeAt(i) == 32 || (str.charCodeAt(i) >= 48 && str.charCodeAt(i)<=57)){
            res_str = res_str + str.charAt(i)
        }
    }
    return res_str
}
let str = "Hi!@%^&# I!#@%* am !@^^% 123Rohit"
console.log(removeSpecialChar(str))
// console.log(" ")