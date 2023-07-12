function mergeSort(array){
    if(array.length === 1){
        return array
    }
    mid=Math.floor(array.length/2)
    const leftArray=array.slice(0,mid);
    const rightArray=array.slice(mid);
    return merge(mergeSort(leftArray),mergeSort(rightArray))
}

function merge(leftArray,rightArray){
    let sortedArray=[];
    let i=0;
    let j=0;
    while(i<leftArray.length && j<rightArray.length){
        if(leftArray[i]<rightArray[j]){
            sortedArray.push(leftArray[i])
            i++;
        }else{
            sortedArray.push(rightArray[j])
            j++;
        }
    }
    return [...sortedArray,...leftArray,...rightArray]
}


console.log(mergeSort([2,3,4,523,45]));