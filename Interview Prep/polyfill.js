//Polyfill:

//Polyfills are pieces of code (often written in JavaScript) that provide modern functionality on older browsers
//polyfills are used to support newer JavaScript features such as promises, which are not available in all browsers
//we should create and store polyfill in utils folder
//polyfill for useState
let state = [];
let index = 0;

function useState(initialValue) {
  const currentIndex = index++;
  if (state[currentIndex] === undefined) {
    state[currentIndex] = initialValue;
  }

  const setState = (newValue) => {
    state[currentIndex] = newValue;
    render();
  };

  return [state[currentIndex], setState];
}

//polyfill for useEffect
let effectDeps = [];
let effectIndex = 0;

function useEffect(callback, deps) {
  const currentIndex = effectIndex++;

  const prevDeps = effectDeps[currentIndex];
  const hasChanged =
    !prevDeps || !deps || deps.some((dep, i) => dep !== prevDeps[i]);

  if (hasChanged) {
    callback();
    effectDeps[currentIndex] = deps;
  }
}

//Polyfills of .map() or .forEach()
if (!Array.prototype.map) {
  //if browser not support map() use your map logic

  Array.prototype.map = function (callbackFunc) {
    //callback will pass function which return item*2
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
      newArr.push(callbackFunc(this[i]));
    }
    return newArr;
  };
}

const nums = [1, 2, 3, 4];
//here call map and pass through callback
const multiply = nums.map((item) => {
  return item * 2;
});
console.log(multiply);

//Polyfills of .filter()
Array.prototype.myFilter = function (callback) {
  //callback will return that items if its validate conditions
  let tempArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFunc(this[i])) {
      //if true push to new array
      newArr.push(callbackFunc(this[i]));
    }
  }
  return tempArr;
};
const newFArray2 = array.myFilter((item) => {
  return item > 2;
});

//polyfills for reduce

Array.prototype.myReduce = function (callback, acc) {
  let output = acc;
  let startIndex = 0;
  if (output === undefined) {
    output = this[0];
    startIndex++;
  }

  for (let i = startIndex; i < this.length; i++) {
    output = callback(output, this[i], i, this);
  }

  return output;
};

//(VVI)flat()
function flatten(arr) {
  let array = [...arr],
    res = [];
  let i = 0;
  while (i < array.length) {
    if (Array.isArray(array[i])) {
      res = res.concat(flatten(array[i]));
    } else {
      res.push(array[i]);
    }
    i++;
  }
  return res;
}

let arr = [1, [2, [3], 4]];
console.log(flatten(arr)); // [1, 2, 3, 4]
//promiseAll
function PromiseAll(values) {
  const promise = new Promise(function (resolve, reject) {
    let result = [];
    let total = 0;
    values.forEach((item, index) => {
      Promise.resolve(item)
        .then((res) => {
          result[index] = res;
          total++;
          if (total === values.length) resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
  return promise;
}
//for array length

Array.prototype.length = function () {
  return this.reduce(function (a, b) {
    return a + 1;
  }, 0);
};

//for every method
Array.prototype.every = function (callback) {
  if (!callback) {
    throw new TypeError("callback must be a function");
  }

  for (let i = 0; i < this.length; i++) {
    if (!callback.call(this, this[i])) {
      return false;
    }
  }

  return true;
};

//for find method
Array.prototype.find = function (callback) {
  if (!callback) {
    throw new TypeError("callback must be a function");
  }

  for (let i = 0; i < this.length; i++) {
    if (callback.call(this, this[i])) {
      return this[i];
    }
  }

  return undefined;
};
