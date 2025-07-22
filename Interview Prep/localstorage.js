//localstorage is a method of store key-value pare of info in web browser,in todo list after giving some operation if you want the data after refreshing the page use localstorage
//after closing the browser automatic clear all data in sessionStorage but in localstorage if you want to clear data you should give localstorage.clear()
localStorage.setItem("Name", "Sam");
console.log(localStorage.getItem("Name"));
let obj = { name: "Sam", age: "25" };
localStorage.setItem("Object", JSON.stringify(obj));
console.log(JSON.parse(localStorage.getItem("Object")));

//fetch all the data from app just paste
for (let key in localStorage) {
  if (!localStorage.hasOwnProperty(key)) {
    continue;
  }
  console.log(`${key}: ${localStorage.getItem(key)}`);
}

import React, { useState, useEffect } from "react";

const App = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    //retrieve cart from localStorage
    const localCart = localStorage.getItem("cart");
    if (localCart) {
      setCart(JSON.parse(localCart));
    }
  }, []);
  const addToCart = (data) =>
    setCart([
      ...cart,
      { type: "ADD_TO_CART", data, props: { sam: "Developer" } },
    ]);
  const removeFromCart = (data) =>
    setCart(cart.filter((item) => item.data !== data));
  useEffect(() => {
    //save cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <div>
        <h3>Cart</h3>
        {cart.map((item) => (
          <div key={item.data}>
            {item.data}
            <button onClick={() => removeFromCart(item.data)}>Remove</button>
          </div>
        ))}
      </div>
      <div>
        <h3>Add Item to Cart</h3>
        <input
          type="text"
          placeholder="Enter Item"
          onKeyDown={(event) =>
            event.key === "Enter" && addToCart(event.target.value)
          }
        />
      </div>
    </div>
  );
};

export default App;

//Note:if you want to test/debug any thing using alert you get o/p like [[object],[object]] so in that case use JSON.stringify to get desire o/p like ["phn":1222,"ph2":2233]
