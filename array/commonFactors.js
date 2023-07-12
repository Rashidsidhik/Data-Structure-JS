const commonFactors = function(a, b) {
    let i=1;
    let count=0;
    while(a>=i && b>=i){
        if(a%i==0 && b%i==0){
            count=count++;
            i++
        }else{
            i++;
        }
    }
    console.log(count);
    return count
};

commonFactors(12,6)