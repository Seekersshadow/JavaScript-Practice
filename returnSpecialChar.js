function returnSpecialChar(str){
    let res_str =""
    for(let i = 0;i<str.length;i++){
        let code = str.charCodeAt(i)
        if(!((code >= 65 && code<=90) || (code >= 97 && code<=122))){
            res_str = res_str + str[i]
        }
    }
    return res_str
}

let str = "Hello!@#"
console.log(returnSpecialChar(str))