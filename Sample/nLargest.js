function nLargest(array){
    array.sort((a,b)=>a-b);
    return array[array.length-3]
}

console.log(nLargest([1, 30, 4, 21, 100000],3));