// sum of middle elements

function sumMid(array){
    length=array.length;
    mid=Math.floor(length/2);
    element=Math.floor(mid/2);
    let sum=0
    for(i=mid-element;i<mid+element;i++){
        sum=sum+array[i]
    }
    return sum
}
console.log(sumMid([2,3,4,5,5,4,3,23,4,5,23,4,23,10]));