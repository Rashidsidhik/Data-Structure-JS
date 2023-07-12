function solution(n) {
    let count=0;
    for(i=1;i<=n;i++){
        for(j=1;j<=(2*i)-1;j++){
            count++;
        }
    }
    count=count*2;
    count=count-(n+(n-1));
    return count;
}

console.log(solution(4));