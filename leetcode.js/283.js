var moveZeroes = function(nums) {

    let pos=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=0){
            nums[pos++]=nums[i];
        }
    }
    for(let i=pos;i<nums.length;i++){
        nums[i]=0
    }
    
    return nums
};

moveZeroes([0,0,1])