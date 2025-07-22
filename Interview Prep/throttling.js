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

//project
import { useState } from "react";
export default function App() {
  const [state, setstate] = useState("");

  const foo = (e) => {
    setstate(e.target.value);
    console.log("default", e.target.value);
    UpdateDebounce(e.target.value);
    document.getElementById("input").disabled = false;

    Updatethrottle(e.target.value); //check strictly if(isNaN(e.target.value))
  };
  const debounce = (cb, delay = 1000) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout); //if user delete or add another text before the time so update call is happening
      timeout = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };
  const throttle = (cb, delay = 2000) => {
    let shouldwait = false;
    return (...args) => {
      if (shouldwait) return;
      cb(...args);
      shouldwait = true;

      setTimeout(() => {
        document.getElementById("input").disabled = true;
        shouldwait = false;
      }, delay);
    };
  };
  const UpdateDebounce = debounce((text) => {
    console.log("debounce", text);
  });
  const Updatethrottle = throttle((text) => {
    console.log("throttle", text);
  });
  return (
    <div className="App">
      <input onChange={foo} value={state} />
      <button id="input" onClick={Updatethrottle}>
        Call
      </button>
    </div>
  );
}
