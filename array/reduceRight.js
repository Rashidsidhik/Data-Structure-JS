const array1 = [[0, 1], [2, 3], [4, 5]];

const result = array1.reduceRight((accumulator, currentValue) =>{
    console.log('hi');
    console.log(accumulator);
    console.log(currentValue);
    // console.log(accumulator.concat(currentValue));
    // return accumulator.concat(currentValue)
});

console.log(result);
// Expected output: Array [4, 5, 2, 3, 0, 1]
