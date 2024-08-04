//A callback function in javascript is a function that is passed as an argument in another function.
//0)
(function ask(question = "prompt", yes = alert, no = alert) {
  if (confirm(question)) yes("You agreed.");
  //if we click yes in confirm message then condition will execute true and yes will execute else no()
  else no("You canceled the execution.");
})();
//1)
function sum(a, b) {
  //(6,5)
  console.log(a + b);
}
function operation(val1, val2, callback) {
  //(6,5,sum())
  callback(val1, val2);
}
operation(6, 5, sum);

//2)
function logQuote(quote) {
  //Hey Hi
  console.log(quote);
}
function sayHi(quote, callback) {
  //('Hi',logQuote())
  var myQuote = "Hey " + quote;
  callback(myQuote);
}
sayHi("Hi!", logQuote);
//3)
(function () {
  const bio = { name: "sam", age: "25" };
  console.log(JSON.stringify(bio.name));
})()(function mul(x) {
  let id = 2;
  return function (y) {
    console.log([x * y, x * id]); //[6,4]
  };
})(2)(3);

//4)
function cb(fn) {
  const value = 10;
  fn(value);
}
cb(function (value) {
  //cb(fn)
  console.log(value);
});
