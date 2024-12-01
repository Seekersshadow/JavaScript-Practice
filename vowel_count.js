// import uppercase from "./uppercase";
function vowelCount(str){
    let cap_str = str.toUpperCase()
    let count = 0
    for(let i =0;i<cap_str.length;i++){
        if(cap_str.charAt(i) =="A" || cap_str.charAt(i) =="E" || cap_str.charAt(i) =="I" || cap_str.charAt(i) =="O" || cap_str.charAt(i) =="U"){
            count++
        }
    }
    return count
}

let str = "hello"

console.log(vowelCount(str))