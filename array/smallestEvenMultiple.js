const smallestEvenMultiple = function(n) {

    // method 1
    
    // if (n == 1) {
    //     return 2
    // }
    // while (n > i) {
    //     if (n * i) {
    //         let a = n * i;
    //         if (a % 2 == 0) {
    //             return a;
    //         }
    //     }
    //     i++;
    // }
    return n%2==0 ? n : n*2
};

smallestEvenMultiple(5)