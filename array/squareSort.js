var sortedSquares = function(nums) {
    let squaredArray= nums.map((num)=>{
        return square = num*num
    })
                 
    for(i=0;i<squaredArray.length-1;i++){
        for(j=i+1;j<squaredArray.length;j++){
            if(squaredArray[i]>squaredArray[j]){
                temp = squaredArray[i];
                squaredArray[i] = squaredArray[j];
                squaredArray[j] = temp;
            }
        }
    }
    return squaredArray;
};

sortedSquares([-7,-3,2,3,11])
