const binarySearch=(array,target)=>{
    let min=0;
    let max=array.length-1
    while(min<=max){
        mid=Math.floor((min+max)/2)
        if(array[mid]<target){
            min=mid+1;
        }else if(array[mid]>target){
            max=mid-1
        }else{
           return mid
        }
    } return false
}

binarySearch([5],51)