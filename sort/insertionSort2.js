function insertionSort(array){
    for(i=1;i<array.length;i++){
        for(j=i-1;j>-1;j--){
            if(array[i]<array[j]){
                temp=array[i];
                array[i]=array[j];
                array[j]=temp
                i--;
            }
        }
    }
    return array
}

console.log(insertionSort([5,2,3,1]));