var map = function(arr, fn) {
    const result=arr.map((key)=>{
        let a = fn(key)
        return a
    })
    return result
};

function plusone(n) { return n + 1; }
console.log(map([1,2,3],plusone));