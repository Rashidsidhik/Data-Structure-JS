// Memoization function
function memoize(func) {
    const cache = {};
    return function (n) {
      if (cache[n]) {
        return cache[n];
      }
  
      const result = func(n);
      cache[n] = result;
      return result;
    };
  }
  
  // Example function to be memoized
  const multiplyByTwo = memoize(function (n) {
    console.log('Computing...');
    return n * 2;
  });
  
  // Test the memoized function
  console.log(multiplyByTwo(5)); // Output: Computing... 10
  console.log(multiplyByTwo(5)); // Output: 10 (cached result)
  console.log(multiplyByTwo(8)); // Output: Computing... 16
  console.log(multiplyByTwo(8)); // Output: 16 (cached result)
  