const canBeIncreasing = function(nums) {
    let flag=0;
    let length=nums.length;
    let count=0;
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length-1;j++){
            // if(i==j){
            //     j++;
            // }
            // if(i==j){
            //     console.log(nums[j],nums[j+2]);
            //     if(nums[j]<nums[j+2] && j!=i){ 
            //         count++;
            //     }
            // }
            // else 
            if(nums[j]<nums[j+1] && j!=i){ 
                console.log(nums[j],nums[j+1],i);
                count++;
            }
        }
        if(count==length-1){
            //  console.log(i)
            return true;
        }
        count=0;
        // if(flag!=1){
        //     console.log(i)
        //     return true
        // }
        // flag=0;
    }
    return false
};

console.log(canBeIncreasing([1,2,10,5,7]));
// console.log(canBeIncreasing([2,3,1,2]));
// console.log(canBeIncreasing([1,1,1]));

