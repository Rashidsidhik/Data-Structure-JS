var numberOfSteps = function(num) {
    let count = 0;
    while(num>0){
        console.log(num);
        if(num%2 == 0){
            num = num/2;
            count++;
        }else{
            num = num -1;
            count++;
        }
    }
    return count+1;
};

console.log(numberOfSteps(7));