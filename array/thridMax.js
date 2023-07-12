const thirdMax = function(nums) {
    let max1=-Infinity;
    let max2=max1;
    let max3=max1;
    let flag=true;
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j]){
                flag=false;
            }
        }
        if(flag){
            if(nums[i]>max1){
                max3=max2;
                max2=max1;
                max1=nums[i];
             } 
             else if(nums[i]>max2 ){
                 max3=max2;
                 max2=nums[i]
             }else if(nums[i]>max3){
                 max3=nums[i]
             }
        }
        flag=true;
    }
  
    if(max3===-Infinity){
        max3=max1
    }

    console.log('result');
    console.log(max1,max2,max3);
    return max3;
};

console.log(thirdMax([2,2,3,1]));