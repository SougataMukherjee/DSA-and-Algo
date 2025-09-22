//Create a function createCounter that takes an integer n and returns a function.Each time the returned function is called, it should return the current value of n and then increment it by one.
let createCounter = function (n) {
  return function () {
    return n++;
  };
};
let counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
