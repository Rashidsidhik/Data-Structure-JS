const broto=(arr)=>{
    let current
    let smallest
    let diff=0
    let sum=0
    let ogSmall =10000;
    for(let i=0;i<arr.length;i++){
        current=arr[i]
        for(let j=0;j<arr.length;j++){
            if(i==j){
                j++;
            }
            smallest = current - arr[j];
            if(current == arr[j] ){
                diff=0;
                break;
            }
            if(smallest<0){
                smallest= arr[j]-current;
            }
            if(ogSmall >= smallest){
                ogSmall = smallest;
                diff = smallest;
            }
        }
        sum = sum + diff;
    }
    return sum;
}

console.log(broto([1,3,3,7,4,7]));