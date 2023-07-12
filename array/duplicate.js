function solution(a) {
    let temp=0;
    for(let i=0;i<a.length-1;i++){
        for(let j=i+1;j<a.length;j++){
            if(a[i]==a[j]){
               temp=a[i];  
            }
        }
    }
    if(temp===0) return -1
    else return temp
}

