function mergeSort(array){
    console.log('main array='+array);
    if(array.length<2){
        return array
    }
    const mid=Math.floor(array.length/2)
    const leftArray=array.slice(0,mid)
    const rightArray=array.slice(mid)
    return merge(mergeSort(leftArray),mergeSort(rightArray))
}

function merge(leftArray,rightArray){
    console.log('left array='+ leftArray);
    console.log('right array='+ rightArray);
    sortedArray=[]
    while(leftArray.length && rightArray.length){
        if(leftArray[0]<=rightArray[0]){
            sortedArray.push(leftArray.shift())
        }else{
            sortedArray.push(rightArray.shift())
        }
    }  
    return [...sortedArray,...leftArray,...rightArray]
}

console.log(mergeSort([2,3,4,523,45,45,23,4,24,345,655,7,4,45,23,2]));