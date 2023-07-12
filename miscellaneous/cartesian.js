const array1=[1,2]
const array2=[3,4]
const cartesian=[]

for(i=0;i<array1.length;i++){
    for(j=0;j<array2.length;j++){
        cartesian.push([array1[i],array2[j]])
    }
}

console.log(cartesian);