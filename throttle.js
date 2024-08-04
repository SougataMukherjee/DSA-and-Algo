const throttle = (func, delay) => {
  let shouldWait = false; // flag for waiting for next call

  return function (...args) {
    if (shouldWait) return;

    func(...args);
    shouldWait = true; // set the flag as true

    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
};

const callback = () => {
  console.log("called");
};

const func = throttle(callback, 1000);

func(); //1st call
func(); //2nd call after 1s sec of 1st call
setTimeout(func, 1500);
