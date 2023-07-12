function bubbleSort(array){
    for(i=0;i<array.length-1;i++){
        for(j=i+1;j<array.length;j++){       
            if(array[i]>array[j]){
                let temp=array[j];
                array[j]=array[i]
                array[i]=temp
            }
        }
        console.log(array);
    }
    return array
}

console.log(bubbleSort([2,2345,2345,13,245,35467,7865,234]));