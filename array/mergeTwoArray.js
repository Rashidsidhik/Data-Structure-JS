const mergeTwoSortedArray=(array1,array2)=>{
    let length=array1.length+array2.length;
    let sortedArray=[]
    let j=0;
    let k=0;
    for(let i=0;i<length;i++){
        if(array1[j]<array2[k]){
            sortedArray.push(array1[j]);
            j++;
        }else{
            sortedArray.push(array2[k]);
            k++;
        }
    }
    console.log(sortedArray);
    return sortedArray
}

mergeTwoSortedArray([1,3,4,6,7,9,10],[2,5,11])