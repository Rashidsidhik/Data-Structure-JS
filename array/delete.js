var removeElement = function(nums, val) {
    let count=0
    let j=0
    for(i=0;i<nums.length;i++){
        if(nums[i]==val){
            for(j=i;j<nums.length;j++){
                nums[j]=nums[j+1]
            }
            i--;
            count++;
        }
    }
    for(i=0;i<count+1;i++){
       nums.pop()
    }
    for(i=0;i<=nums.length-count;i++){
        j++;
    }
    console.log(j);
    return count
};

removeElement([0,1,2,2,3,0,4,2],2)