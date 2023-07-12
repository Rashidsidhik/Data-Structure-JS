var duplicateZeros = function(arr) {
    let count=0
    for(i=0;i<arr.length;i++){
        console.log(i);
        if(arr[i]==0){
           for(j=arr.length;i<j;j--){
              arr[j+1]=arr[j];
           }
           count++
           arr[i+1]=0
           i++
           console.log(i);
        }
    } 
    console.log("count="+count);
    for(i=0;i<count*2;i++){
        arr.pop()
    }
    console.log(arr);
    return arr
};

duplicateZeros([1,0,2,3,0,4,5,0])
