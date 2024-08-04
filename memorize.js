function memoize(fn) {
  const cache = {}; // Initialize a cache using an object
  return function (...args) {
    // Return a function that takes any number of arguments
    const key = JSON.stringify(args); // Create a unique key based on arguments
    if (key in cache) {
      // Check if the key exists in the cache
      return cache[key]; // Return cached result if it exists
    }
    const result = fn(...args); // Call the function with the arguments
    cache[key] = result; // Store the result in the cache
    return result; // Return the result
  };
}

const multiply = (a, b) => a * b;
const memoizedMultiply = memoize(multiply);

console.log(memoizedMultiply(2, 3)); // 6
console.log(memoizedMultiply(2, 3)); // 6, retrieved from cache

const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // 120
console.log(memoizedFactorial(5)); // 120, retrieved from cache
console.log(memoizedFactorial(6)); // 720
