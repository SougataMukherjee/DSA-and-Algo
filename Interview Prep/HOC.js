const withLayout = (WrappedComponent) => {
  return function LayoutWrapper(props) {
    return (
      <div
        style={{
          backgroundColor: "#f5f5f5",
          margin: "20px",
          padding: "20px",
          minHeight: "100vh",
        }}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withLayout;

const MyComponent = () => {
  return <div></div>;
};
const EnhancedComponent = Comp(MyComponent);



// HOC and custom hook
// Note: use custom Hooks rather than HOC,if you want to wrapped whole components then use HOC
// A higher-order component is a function that takes takes one or more components as props and returns a new component
// HOC React.memo() is HOC which take component as a props and prevent component rerendering
// when parent component rendered a child component might unnecessary render,to optimize the behaviour we use React.memo

// A Higher-Order Component is a function that takes a component and returns a new component with additional props or behavior.

//1)
//some times we can not write inner function inside another function 
function add (a, b) {  
    return a + b  //first calculate and return 30+20
  }  
  function higherOrder(a, addReference) {  
    return addReference(a, 20)  // second return 50
  } 
  console.log(higherOrder(30, add))//50
  
  or

  function higher(a, b) {
    return function() {
        return a + b;
    };
}
console.log(higher(30, 20)())//50
  
 // 2)
import React from 'react';
function App(props) {
  return <div>{props.greeting}</div>;
}
export default App;

import React from 'react';
function withExtraProp(WrappedComponent) {
  return function(props) {
    // Return a new component with the extra prop
    return <WrappedComponent {...props} greeting="Hello, World!" />;
  };
}

//use this with const EnhancedApp = withExtraProp(App);

//3)
import { useState } from "react";
import { MemorizeConst } from "./DropDown";

export default function App() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  console.log("Rendering Parent", count);
  return (
    <div className="App">
      <MemorizeConst title="Input Field" count={count} />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

import React, { memo, useState } from "react";

export const DropDown = (props) => {
  const [count, setCount] = useState(1);
  console.log("Rendering child", props);
  return (
    <>
      <div>{props.title}</div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
};

const customComparator = (prevProps, nextProps) => {
  return nextProps.title === prevProps.title;
};

export const MemorizeConst = memo(DropDown, customComparator);

//4)
//useMousePosition hook use with const { position, elementRef } = useMousePosition();
import React, { useState, useEffect, useRef } from "react";

const useMousePosition = () => {
  const [position, setPosition] = useState({
    clientX: null,
    clientY: null,
    pageX: null,
    pageY: null,
  });

  const elementRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setPosition({
        clientX: ev.clientX,
        clientY: ev.clientY,
        pageX: ev.pageX,
        pageY: ev.pageY,
      });
    };

    const element = elementRef.current;
    if (element) {
      element.addEventListener("mousemove", updateMousePosition);
      element.addEventListener("mouseenter", updateMousePosition);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", updateMousePosition);
        element.removeEventListener("mouseenter", updateMousePosition);
      }
    };
  }, [elementRef.current]);

  return { position, elementRef };
};

export default useMousePosition;





