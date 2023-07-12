const strStr = function(haystack, needle) {
    let length=needle.length;
    let k=0
    for(let i=0;i<haystack.length;i++){
        if(haystack[i]==needle[k]){
            k++;
            if(k==length){
                return i-(k-1)
            }
        }else{
            i=i-(k)
            k=0;
        }
    }
    return -1
};

console.log(strStr("mississippi","issip"));