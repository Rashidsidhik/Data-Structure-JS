const differenceOfSum = function (nums) {
    let sum1 =0;
    let sum2=0
  
    for (let j = 0; j < nums.length; j++) {
        sum1 = sum1 + nums[j]
        let a= nums[j].toString().split("")
        if(a.length>1){
            for(let k=0;k<a.length;k++){
                const integer = parseInt(a[k]);
                sum2=sum2+integer
            }
        }else{
            const integer = parseInt(a[0]);
            sum2 = sum2 + integer
        }
        
    }
    let output = sum1-sum2;
    return output
};

differenceOfSum([1,15,6,3])