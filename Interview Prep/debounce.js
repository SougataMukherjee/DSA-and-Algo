// Note: ensure that function only call after a certain delay has passed since the last time it was called
//in search bar in every key stroke suggestion are comming so if you type 5 charecters 5 times api calls are happen using keystroke event
//so we can optimize the limit the rate of each api calls using debouncing and throttling use in scrollbar
function debounce(func, delay = 300) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => func(...args), delay);
  };
}
const input = document.querySelector("#searchInput");
input.addEventListener(
  "input",
  debounce((e) => {
    input.focus();
    console.log("Search:", e.target.value);
  }, 500)
);

// Note: in react we have to apply
function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

const debouncedTerm = useDebounce(stateVar, 1000);
useEffect(() => {
  console.log("Search:", debouncedTerm);
}, [debouncedTerm]);

//project
import React, { useState, useEffect, useRef } from "react";
import { Alert } from "@mui/material";
import Style from "./styles.module.css";
const App = () => {
  const [data, setData] = useState();
  const [isDebounce, setDebounce] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const debounceTimer = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isDebounce) {
        setCountdown(countdown - 1);
      }
    }, 1000);
    if (countdown === 0) {
      clearTimeout(timer);
      setCountdown(10);
    }
    console.log(countdown);
  }, [isDebounce, countdown, isLoading]);
  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);
  const fetchData = async () => {
    const response = await fetch("https://reqres.in/api/users?page=2", {
      method: "GET",
    });
    const json = await response.json();
    setData(json);
    console.log(json, data);
    //try after completion of the api call start timer
  };
  const handleClick = () => {
    if (isDebounce) return;
    setDebounce(true);
    fetchData();
    setIsLoading(true);
    debounceTimer.current = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    debounceTimer.current = setTimeout(() => {
      setDebounce(false);
    }, 10000);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Here</button>
      {isDebounce && countdown > 0 && <div>{countdown} seconds remaining</div>}
      {isLoading && (
        <div className={Style.alert}>
          <Alert severity="success">Data is loading !</Alert>
        </div>
      )}
      {isLoading ? <p>Loading...</p> : <div>{JSON.stringify(data)}</div>}
    </div>
  );
};
export default App;
// .alert {
//   position: absolute;
//   top: 0px;
//   z-index: 2;
//   width: 98vw;
// }

{
  /* <input type="text" />
    <span id="debounce"></span>
    <button id="btn">click</button> */
}

const input = document.querySelector("input");
const debounceText = document.getElementById("debounce");
const btn = document.getElementById("btn");

input.addEventListener("input", (e) => {
  Debounce(e.target.value);
  //Debounce.call({ name: "sam" }, e.target.value);
});

function debounce(cb, delay = 1000) {
  let timeOut;
  return (e) => {
    //...args
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      btn.disabled = false;
      cb(e);
    }, delay);
  };
}

const Debounce = debounce((text) => {
  btn.disabled = true;
  debounceText.textContent = text;
});
