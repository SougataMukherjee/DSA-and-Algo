//memorize function return a function which return the result or cache value concept of closure
function memoize(fn) {
  const cache = {};
  return function (...args) {
    //if you give args only one argument calculate only
    const key = JSON.stringify(args); // Create a unique key based on arguments '[1, 2]'
    if (key in cache) {
      //check if [1, 2] exist in cache
      return cache[key]; // Return cached result if it exists
    }
    const result = fn(...args); // Call the function with the arguments
    cache[key] = result; // Store the result in the cache = { "[1,2]": 2 }
    return result; //2
  };
}
const Mul = (a, b) => a * b;
const memoizedMul = memoize(Mul); //we can do memoize(Mul)(1, 2) also
memoizedAdd(1, 2);
memoizedAdd(1, 2);

//JavaScript Memorization:

//A memoized function is a function that never gets called twice with the same inputs. Instead, it returns a cached value from previous calls.
var a = [1, 2, 3, 4];
var b = a; //make b a reference to a
console.log(b); //[ 1, 2, 3, 4 ]
a.pop();
console.log(b); //[ 1, 2, 3 ]

function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
const memoFactorial = memoize(factorial);
console.log(memoFactorial(3)); //6
console.log(memoFactorial(4)); //24

//function currying or closure:Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c), f(a,b)(c) or f(a)(b,c)

function area(x) {
  return function (y) {
    return x * y;
  };
}
console.log(area(4)(5)); //20

function mul(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}
alert(mul(2)(3)(4)); //24

const f = (x) => x + x;
const g = (y) => y * y;
console.log(f(g(10))); //200 first 10*10 then 100+100
