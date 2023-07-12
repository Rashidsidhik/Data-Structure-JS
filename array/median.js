let a=[2,4,6,8,10,12,14,16];
let ans


if(a.length % 2 !==0){
    console.log('odd');
    ans=a[Math.floor(a.length/2)];
}else{
    console.log('even');
    ans=(a[Math.floor(a.length/2)]+a[Math.floor(((a.length-1)/2))])/2;
}

console.log(ans);