//closure with api
function callApi(method) {
  return function (url) {
    console.log(`Fetching from ${url} using ${method}`);
  };
}
const url = "http://example.com";
callApi("GET")(url);

//closure with private property
//A closure is a function that returns another function, where the returned function always has access to variables from its parent function's scope, even after the parent function has finished executing.

//type 1:
function myClosure() {
  let a = 12;
  return function () {
    // Inner function (closure)
    console.log(a);
  };
}

const innerFunc = myClosure();
innerFunc();

//type 2:
function createCounter(initialCount = 0) {
  let count = initialCount; // private variable
  return {
    increment: () => ++count, // Public methods
    decrement: () => --count,
    getCount: (num) => (count += num),
    reset: () => (count = initialCount),
  };
}
const counter = createCounter();
console.log(counter.count);
console.log(counter.increment());

//closure with event loop
for (var i = 0; i < 5; i++) {
  function test(i) {
    setTimeout(() => {
      console.log(i);
    }, 2000);
  }
  test(i);
}

//closure with memorize function or caching

function getMemo(fn) {
  const cache = {};

  return function calc(x) {
    if (cache[x]) return cache[x];

    // heavy calculation store
    const result = fn(x);
    cache[x] = result;
    return result;
  };
}
const res = createMemoizer();
getMemo(100);
//method chaining in closure

function amount(initialValue) {
  let total = initialValue;
  return {
    hundred(count) {
      total *= 100 * count;
      return this;
    },
    lacs(count) {
      total *= 100000 * count;
      return this;
    },
    value() {
      return total;
    },
  };
}

console.log(amount(20).hundred(2).value());
console.log(amount(3).lacs(2).value());
