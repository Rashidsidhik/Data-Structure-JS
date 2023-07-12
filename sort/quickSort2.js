const quickSort=(array)=>{
    if(array.length<=1) return array
    let left=[]
    let right=[]
    let pivot=array[array.length-1]
    for(i=0;i<array.length;i++){
        array[i]<pivot ? left.push(array[i]) : right.push(array[i])
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort([1,2345,23,452,345,2,345,123]));