function selectionSort(array){
    for(i=0;i<array.length-1;i++){
        let min=i;
        for(j=i+1;j<array.length;j++){
            if(array[j]<array[min]){
                min = j;
            }
        }
        if(min!==i){
            let temp =array[min];
            array[min]=array[i];
            array[i] = temp
        }
    }
    return array
}

console.log(selectionSort([2,3,5,6,21,2234,112]));