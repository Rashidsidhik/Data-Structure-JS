function search(array,min,max,target){
    if(max>=min){
        let mid=Math.floor((min+max)/2);
        if(array[mid]<target){
            return search(array,mid+1,max,target)
        }else if(array[mid]>target){
            return search(array,min,mid-1,target)
        }else{
            console.log(mid);
            return mid
        }
    } return -1
}

array=[1,2,3,4,5,6,7,8,9,10]
max=array.length-1
console.log(search(array,0,max,4));