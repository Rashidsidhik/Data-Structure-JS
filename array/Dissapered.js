const findDisappearedNumbers = function (nums) {
    let length = nums.length;
    let k = 1;
    let array = [];
    let flag = true;
    while (k <= length) {
        flag=true
        for (let i = 0; i < nums.length; i++) {
            if (k === nums[i]) {
                flag=false;
            }
        }
        if(flag){
            console.log(k)
            array.push(k)
        }
        k++;
    }
    
    return array
};

findDisappearedNumbers([1,1])
