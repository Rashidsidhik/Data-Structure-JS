// let a = 'true' + 23;

// console.log(a);
// console.log(typeof(a));

// console.log.call.call.call.call.call.apply(a => a, [1, 2]);




// let x=10 , { x: y = 4 } = { x };
    
// console.log(y);
// console.log(x);

// console.log('hi');
// console.log(process.memoryUsage());
// console.log('hello');

var removeElement = function(nums, val) {
    var zeroStartIdx = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[zeroStartIdx]=nums[i];
            zeroStartIdx++
        }
    }
    console.log(zeroStartIdx);
    return zeroStartIdx; 
};
removeElement([0,1,2,2,3,0,4,2],2)
