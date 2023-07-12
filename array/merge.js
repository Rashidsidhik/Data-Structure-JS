var merge = function(nums1, m, nums2, n) {
    let k=0
    for(i=m;i<m+n;i++){
        nums1[i]=nums2[k]
        k++;
    }
    for(i=0;i<nums1.length;i++){
        for(j=i+1;j<nums1.length;j++){
            if(nums1[i]>nums1[j]){
                temp=nums1[j];
                nums1[j]=nums1[i]
                nums1[i]=temp
            }
        }
    }
    console.log(nums1);
};

merge([4,5,6,0,0],3,[1,2,3],3)