var removeElement = function(nums, val) {
    let count=0
    
    newArray=nums.filter(item=> item!=val)
    console.log(newArray);
    console.log(nums);
    
    count = newArray.length;
    return count
};

removeElement([3,2,2,3],2)