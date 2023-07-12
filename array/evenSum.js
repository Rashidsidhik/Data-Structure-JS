var findNumbers = nums=> {
    even=0;
    for(i=0;i<nums.length;i++){
        let k=nums[i].toString().length
        if(k%2==0){
            even++
        }
    }
    return even    
};

console.log(findNumbers([555,901,482,1771,1111]));  