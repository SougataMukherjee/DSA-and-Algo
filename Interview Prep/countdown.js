//counter and countdown app
import React, { useRef, useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [countdown, setCountdown] = useState(20);
  const timerRef = useRef(null);
  const countdownRef = useRef(null);

  const onStart = () => {
    timerRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const onStop = () => {
    clearInterval(timerRef.current);
  };

  const onCountDown = () => {
    countdownRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(countdownRef.current);
          console.log("Time's up!");
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="App">
      <div>
        Counter: {count}
        <button onClick={onStart}>Start</button>
        <button onClick={onStop}>Stop</button>
      </div>
      <div>
        Countdown: {countdown}
        <button onClick={onCountDown}>CountDown</button>
      </div>
    </div>
  );
}
