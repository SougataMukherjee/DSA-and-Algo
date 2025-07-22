//Promise is a object which make handle asynchronous operations ,
//when we call fetch(URL,options) it will return a promise
let isLoading = false;
function fetchData(url) {
  isLoading = true;
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        isLoading = false;
        const { url, title } = data;
        element.innerText = title;
        item.src = url;
        resolve(data);
      })
      .catch((error) => {
        isLoading = false;
        reject(error);
      });
  });
}

fetchData("https://api.example.com/data")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

//fetch parallel
async function getData() {
  try {
    const [todos, users] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
    ]);
    setData([...todos, ...users]);
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}

//recursive promise
function countToK(i = 0, k = 10) {
  return new Promise((resolve, reject) => {
    if (i > k) return reject(`Exceeded k=${k}`);
    console.log(i);
    i === k
      ? resolve("Done")
      : setTimeout(() => resolve(countToK(i + 1, k)), 1000);
  });
}

countToK(0, 5).then(console.log).catch(console.error);

//Serial Promise Execution
async function runFunctionsOneByOne(functions) {
  const results = [];
  for (const func of functions) {
    const result = await func();
    results.push(result);
  }
  return results;
}

const tasks = [
  () => {
    return "First data";
  },
  async () => {
    return "Second data";
  },
  () => {
    return "Third data";
  },
];

runFunctionsOneByOne(tasks).then((outputs) => {
  console.log("All outputs:", outputs);
});


syntax:
new Promise((resolve, reject) => {
  // Perform asynchronous operations
 // if (/* async operation successful */) {
  //  resolve(result);
  //} else {
  //  reject(error);
  //}
})
  .then(result => {
    // Handle the resolved value
  })
  .catch(error => {
    // Handle any errors
  });
  
var myPromise = new Promise((resolve,reject)=>{
    if(10>5) {
        resolve([1,2,3,4,5])
    } else {
         reject('10 is geater than 5')
    }
})

myPromise.then((data)=>{
console.log(data)
})
myPromise.catch((data)=>{
console.log(data)
})

  //The Promise.any() returns a Promise that is fulfilled as soon as the first Promise in an iterable of Promises is fulfilled
//Promise.all() if any fail its throw error if all are giving responsewill reject immediately upon any of the input promises rejecting.at the time of page load
//  Note:Promise.all() and Promise.race() are two methods for handling multiple promises in JavaScript
const promises = [promise1, promise2, promise3];
Promise.race(promises)
  .then(result => {
    // The first promise to resolve successfully
  })
  .catch(error => {
    // The first promise to reject
  });


//parallel API call/Parallel Promises
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const url1 = "https://jsonplaceholder.typicode.com/todos";
    const url2 = "https://jsonplaceholder.typicode.com/users";

    try {
      const responses = await Promise.all([fetch(url1), fetch(url2)]);

      const data1 = await responses[0].json();
      const data2 = await responses[1].json();
      setData([...data1, ...data2]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  console.log(data);

  return <div className="App"></div>;
}

//sequence API calling
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const url1 = "https://jsonplaceholder.typicode.com/todos";
    const url2 = "https://jsonplaceholder.typicode.com/users";

    try {
      const response1 = await fetch(url1);
      const data1 = await response1.json();

      const response2 = await fetch(url2);
      const data2 = await response2.json();

      setData([...data1, ...data2]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  console.log(data);

  return (
    <div className="App">
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.id} - {item.title || item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}


//.then handlers are chained, so each handler receives the result from the previous handler
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  });
  promise.then(function (result) {
    console.log(result * 2);
    return result * 2;//1*2
  });
  promise.then(function (result) {
    console.log(result * 2);//1*2
    return result * 2;
  });
  promise.then(function (result) {
    console.log(result * 2);//1*2
    return result * 2;//state and result
  });
  
  
 // example of promise chaining
  //.then handlers are attached to the same initial promise here one result pass to another 
    let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  }).then(function (result) {
    console.log(result * 2);//1*2
    return result * 2;
  }).then(function (result) {
    console.log(result * 2);//2*2
    return result * 2;
  }).then(function (result) {
    console.log(result * 2);//4*2
    return result * 2;
  });




async function call() {
    const test = new Promise((res,reject) => {
      console.log("2");
      setTimeout(() => res("call"), 1000);
    });
    return test;
  }

  async function fun() {
    await (async () => {
      console.log("1"); //first execute 
      const test = call();
      await test; //execute test and return 2
      console.log("3");//then return 3
    })();
    console.log("4");//then 4
  }
  fun();            
  // o/p 1234
