var findMaxConsecutiveOnes = function(nums) {
    let count=0;
    let temp=0;
    for(i=0;i<nums.length;i++){
        if(nums[i]==1){
            count++;
            if(temp<count){
                temp = count;
            }   
        }else if(nums[i]==0){
            count = 0;
        }
    }
    return temp
};

console.log(findMaxConsecutiveOnes([1,0,0,0,0,0,0]));