const mergeSort=(array)=>{
    if(array.length<2) return array

    const mid=Math.floor(array.length/2)
    const leftArray=array.slice(0,mid)
    const rightArray=array.slice(mid)
    return merge(mergeSort(leftArray),mergeSort(rightArray))
}

const merge=(leftArray,rightArray)=>{
    sortedArray=[]
    while(leftArray.length && rightArray.length){
        leftArray[0]<=rightArray[0] ?  sortedArray.push(leftArray.shift()) : sortedArray.push(rightArray.shift())
    }
    return [...sortedArray,...leftArray,...rightArray]
}

console.log(mergeSort([234,45234,5,234,5,2345,32,45,234,5,234,55,234,5]));