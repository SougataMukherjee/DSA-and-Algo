//scroll and resize or mousemove
function throttle(func, delay = 300) {
  let timerId = null;
  return (...args) => {
    if (timerId) return;
    timerId = setTimeout(() => {
      timerId = null;
      func(...args);
    }, delay);
  };
}

window.addEventListener(
  "scroll",
  throttle(() => {
    console.log("Scrolled");
  }, 200)
);
