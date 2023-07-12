function solution(sequence) {
    array=[...sequence]; 
    for(i=0;i<sequence.length;i++){
        sol=true;
        a=array.shift();
       // console.log(a);
        for(j=0;j<sequence.length-1;j++){
            console.log(sequence[0]);
            console.log(sequence[j],sequence[j+1]);
            if(sequence[j]>=sequence[j+1]){
                sol = false;
                console.log(sol);
            }
        }
    }
    return sol
}

console.log(solution([3, 5, 67, 98, 3]));