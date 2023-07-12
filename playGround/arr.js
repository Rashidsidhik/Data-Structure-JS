const reduce = function(nums, fn, init) {
    if (nums.length==0) return init
    let val=0
    for(let i=0;i<nums.length;i++){
        val = fn(init,nums[i])
        init=val
        if(i==nums.length-1 ){
            return val;
        }
    }
};


function sum(accum, curr) { return 0; }

console.log(reduce([],sum,25));