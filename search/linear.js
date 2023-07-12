const linearSearch=(arr,target)=>{
    for(i=0;i<arr.length;i++){
        if(arr[i]==target){
            console.log(`Element found at the position ${i+1}`);
        }
    }
}
linearSearch([1,2,3,4,5,6,7,8],4)   