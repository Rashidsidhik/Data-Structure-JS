const quickSort=(array)=>{
    if(array.length<=1) return array
    let pivot=array[array.length-1]
    let left=[]
    let right=[]
    for(i=0;i<array.length-1;i++){
        if(array[i]<pivot){
            left.push(array[i])
        }else{
            right.push(array[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
console.log(quickSort([2,2345,2345,13,245,35467,7865,234]));






// we can concatenate the array by using spread operator
let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];
let concatenatedArray = [...firstArray, ...secondArray];