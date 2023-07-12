const findDifference = function (nums1, nums2) {
    let arr1=[];
    let arr2=[];
    for (let i = 0; i < nums1.length; i++) {
        let flag=true
        for (let j = 0, k=i+1; j < nums2.length; j++,k++) {
            if(nums1[i]===nums2[j] || nums1[i]==nums1[k]){
                flag=false;
            }
        }
        if(flag){
            arr1.push(nums1[i])
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        let flag=true
        for (let j=0,k=i+1; j < nums1.length; j++,k++) {
            if(nums1[j]==nums2[i] || nums2[i]==nums2[k]){
                flag=false;
            }
        }
        if(flag===true){
            arr2.push(nums2[i])
        }
    }
    return [arr1,arr2]

};

console.log(findDifference([1,2,3,3],[1,1,2,2]));