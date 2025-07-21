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
