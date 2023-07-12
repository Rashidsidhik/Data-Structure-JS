var addTwoPromises = async function(promise1, promise2) {
        const a = await promise1;
        const b = await promise2;
        console.log('hi',a+b);
        return a+b
};


promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))

console.log(addTwoPromises(promise1,promise2));