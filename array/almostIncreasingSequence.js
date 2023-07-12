function solution(sequence) {
    k=0
    while(sequence.length){
        sol=true;
        array=[...sequence]; 
        array.splice(k,1)
        console.log(array);
        k++;
        for(j=0;j<array.length;j++){
            if(array[j]>=array[j+1]){
                sol = false;
            }
        }
        if(sol === true){
            return sol
        } 
    }
    return sol
}

console.log(solution([10, 1, 2, 3, 4, 5]));