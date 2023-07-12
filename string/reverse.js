const title = ":htraE no od ot ffutS";
const messages = [
            "maerc eci yrT",
            "rewoT leffiE tisiV",
            "noom eht ot snamuh etacoleR",
            "egrahc ni stac tuP", 
        ]

// method 1
function reverseString(str){
    len=str.length
    let stringReversed=''
    for(i=len-1;i>0;i--){
        stringReversed+=str[i]
    } 
    return str;
}
console.log(reverseString(title));

// method 2
// function reverseString(str){ 
//     return str.split('').reverse().join('');
// }
// console.log(reverseString(title));

function reverseStringsInArray(arr){
   return arr.map(item=>reverseString(item))
}
console.log(reverseStringsInArray(messages));