function callback(name) {
  console.log("I am  a callback function", name);
}
function hof(func, name) {
  console.log("I am higher order function");
  func(name);
}
hof(callback, "Sam");

//type 3:if order(register-sentEmail-login) you want to maintain everytime also improve it with promise
function register(cb) {
  setTimeout(() => {
    console.log("register end");
    cb();
  }, 3000);
}
function sentMail(cb) {
  setTimeout(() => {
    console.log("mail confirm");
    cb();
  }, 2000);
}
function login() {
  setTimeout(() => {
    console.log("successfully login");
  }, 1000);
}
register(function () {
  sentMail(function () {
    login();
  });
});

//mordern way:
function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("register end");
      resolve();
    }, 3000);
  });
}
function sentMail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("email confirm");
      resolve();
    }, 2000);
  });
}
function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login");
      resolve();
    }, 1000);
  });
}
async function authenticate() {
  try {
    await register();
    await sentMail();
    await login();
  } catch (err) {
    console.error(err);
  }
}
authenticate();

// callback asynchronously
//callback function is passed as an argument to HOF and execute asynchronously
function asyncTask(callback) {
  setTimeout(() => {
    callback("Task completed after 1s");
  }, 1000);
}

asyncTask((message) => console.log(message));

// callback conditionally
function fetchData(shouldCall, name, callback) {
  const data = "test";
  if (shouldCall) callback(data);
  else return;
}
fetchData(true, "Alice", (data) => console.log("Callback executed.", data));

//callback Recursively
function countdown(n, callback) {
  if (n > 0) {
    console.log(n);
    setTimeout(() => countdown(n - 1, callback), 1000);
  } else {
    callback("Done!");
  }
}

countdown(3, (message) => console.log(message));
