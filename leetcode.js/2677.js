var chunk = function(arr, size) {
    let result = [];
    let indx = 0;
    while(indx < arr.length){
        result.push(arr.slice(indx,indx+size))
        indx +=size
    }
    return result
};