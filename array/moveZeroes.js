const moveZeroes = function(nums) {
    let count=nums.length;
    let count2=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==0){
            for(j=i;j<nums.length-count2;j++){
                nums[j]=nums[j+1];
            }
            nums[count-1]=0;
        }
        if(nums[i]==0){
            for(j=i;j<nums.length-count2;j++){
                nums[j]=nums[j+1];
            }
            nums[count-1]=0;
        }
    }
    console.log(nums);
};

moveZeroes([0,0,1])