function fibonacci(n){
    let array=[0,1]
    for(i=1;i<n;i++){
        a=array[i]
        b=array[i-1]
        c=a+b
        array.push(c)
    }

    for(i=2;i<n;i++){
        array[i]=array[i-1]+array[i-2]
    }
    return array
}   

console.log(fibonacci(9));