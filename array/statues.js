function solution(statues) {
    let count=0;
    let found;
    const array=statues.sort((a,b)=>a-b);
    console.log(array);
    max=array[array.length-1];
    min=array[0];
    for(let i=min;i<max;i++){
        found=false;
        for(let j=0;j<array.length;j++){
            if(array[j]===i){
                found=true;
            }
        }
        if(!found){
            count++;
            found=false;
        }
    }
    return count
}

solution([6,2,3,8])