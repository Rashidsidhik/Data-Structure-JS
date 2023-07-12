const isPowerOfTwo = function(n) {
    let outcome=0;
    let i=0;
    while(n>outcome){
        let outcome = Math.pow(2, i);
        i++;
        console.log(outcome);
        if(outcome==n){
            return true
        }
        if(outcome>n){
            return false
        }
    }
    return false
};

isPowerOfTwo(9);