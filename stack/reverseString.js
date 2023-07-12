function reverseString(str){
    const stack=[];
    for(let i=0;i<str.length;i++){
        stack.push(str[i]);
    }
    let reversed=''
    while(stack.length>0){
        reversed = reversed + stack.pop();
    }
    return reversed;
}

console.log(reverseString('malik'));