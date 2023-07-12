function insertionSort(array){
    for (i = 1; i < array.length; i++) {
        for (j = i - 1; j >= 0 && array[i] < array[j]; j--) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i--;
        }
    }
    return array;
    
    
}

console.log(insertionSort([5,2,3,1]));