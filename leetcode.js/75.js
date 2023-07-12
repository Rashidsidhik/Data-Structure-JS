const findMaxAverage = function(nums, k) {
    let skipLength;
    let divisor=k;
    if(nums.length===k){
        skipLength = 0;
        k--;
    }else{
        skipLength =  Math.floor((nums.length-k)/2) 
    }
    let result=0
    console.log(skipLength);
    for(let i=skipLength;i<=k;i++){
        console.log(result,nums[i],k);
        result=result+nums[i];
    }

    console.log(result)
    return nums.length===1 ? result : result/(k+1)
};

// Input: nums = [1,12,-5,-6,50,3], k = 4

findMaxAverage([1,12,-5,-6,50,3],4)
console.log(findMaxAverage([4,0,4,3,3],5));
console.log(findMaxAverage([5],1));