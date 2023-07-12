function insertionSort(array){
    for(i=1;i<array.length;i++){
        for(j=i-1;1<j;j--){
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

console.log(insertionSort([2,3,5,6,21,2234,112]));