//accessing previous state using ref
import { useEffect, useRef, useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const usePrevious = (value) => {
    const ref = useRef();

    useEffect(() => {
      ref.current = value;
    }, [value]);

    return ref.current;
  };

  const previousInputValue = usePrevious(inputValue);
  console.log(
    "Previous Value:",
    previousInputValue,
    "Previous Value",
    inputValue
  );

  return (
    <div className="App">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}



//passing ref through props using Forwarding Refs
import DropDown from "./DropDown";
import { useRef, useEffect, useState } from "react";
export default function App() {
  let inputRef = useRef(null);
  let renderCount = useRef(1);
  let [name, setName] = useState("");
  useEffect(() => {
    renderCount.current += 1;
  });
  const foo = () => {
    inputRef.current.value = "1000";
    inputRef.current.style.color = "green";

    if (!inputRef.current.value) inputRef.current.focus();
    else alert(inputRef.current.value);
  };
  return (
    <div className="App">
      <h1>Welcomeback Alien</h1>
      <DropDown ref={inputRef} color="blue" name={name} setName={setName} />
      <button onClick={foo}>click</button>
      <div>Rendered{renderCount.current}times</div>
    </div>
  );
}

import React, { forwardRef } from "react";
function DropDown(props, ref) {
  return (
    <div>
      <input
        type="text"
        ref={ref}
        style={{ border: `2px solid ${props.color}` }}
        {...props}
        onChange={(e) => props.setName(e.target.value)}
      />
    </div>
  );
}
export default forwardRef(DropDown);