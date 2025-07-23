## JavaScript Interview Question

### Question 1: What will be the output?

```js
let x = 1 > 2 > 3;
console.log(x);
```

### Answer:

**Output:** `false`

### Question 2: What will be the output?

```js
let x = false;
let y = "0";
let z = 0;
console.log(x == y);
console.log(x == z);
```

### Answer:

**Output:** `true  true`

### Question 3: What will be the output?

```js
let x = "hello";
let y = new String("hello");
console.log(x == y);
console.log(x === y);
```

### Answer:

**Output:** `true  false`

### Question 4: What will be the output?

```js
let x = Infinity;
console.log(typeof x);
```

### Answer:

**Output:** `number`

### Question 5: What will be the output?

```js
let x = [];
let y = [];
let z = x + y;
console.log(typeof z, z);
```

### Answer:

**Output:** `string  ''`

### Question 6: What will be the output?

```js
let a = [1, 2, 3];
let b = [4, 5, 6];
console.log(a + b);
```

### Answer:

**Output:** `1,2,34,5,6`

### Question 7: What will be the output?

```js
let x = true;
let y = false;
let z = x + y && x * y;
console.log(z);
```

### Answer:

**Output:** `0`

### Question 8: What will be the output?

```js
let x = "false";
let y = !x;
console.log(y);
```

### Answer:

**Output:** `false`

### Question 9: What will be the output?

```js
let x = 1;
let y = "1";
console.log(++x, ++y);
```

### Answer:

**Output:** `2  2`

### Question 10: What will be the output?

```js
let x = [2];
let y = 2;
console.log(x == y);
```

### Answer:

**Output:** `true`

### Question 11: What will be the output?

```js
const a = { b: { c: 2 } };
const b = { ...a };
a.b.c = 3;
console.log(b.b.c);
```

### Answer:

**Output:** `3`

### Question 12: What will be the output?

```js
let x = [1, 2, 3];
let y = x.map((num) => {
  x.push(num + 3);
  return num + 1;
});
console.log(y);
```

### Answer:

**Output:** `[ 2, 3, 4 ]`

### Question 13: What will be the output?

```js
let x = { a: 1 };
let y = Object.assign({}, x);
console.log(x === y);
```

### Answer:

**Output:** `false`

### Question 14: What will be the output?

```js
let x = 10;
let y = 20;
console.log("total = " + x + y);
```

### Answer:

**Output:** `total = 1020`

### Question 15: What will be the output?

```js
const arr = [1, 2, 3];
arr.forEach((num) => num * 2);
console.log(arr);
```

### Answer:

**Output:** `[1,2,3]`

### Question 16: What will be the output?

```js
let a = [1, 2, 3];
a.push(a[2]++);
console.log(a);
```

### Answer:

**Output:** `[ 1, 2, 4, 3 ]`

### Question 17: What will be the output?

```js
let x = [1, 2, 3];
let y = x.join("");
console.log(typeof y);
```

### Answer:

**Output:** `string`

### Question 18: What will be the output?

```js
let margin = "10px"; //10.5
let x = parseInt(margin);
console.log(parseInt(x));
```

### Answer:

**Output:** `10`

### Question 19: What will be the output?

```js
let x = [null, 0, "0", false, "a", "", 1];
let y = x.filter((value) => value);
console.log(y);
```

### Answer:

**Output:** `[ '0', 'a' ,1]`

### Question 20: What will be the output?

```js
let x = 1;
console.log(x + x++);
```

### Answer:

**Output:** `2`

### Question 21: What will be the output?

```js
let a = 10;
let b = (a, a + 10);
console.log(b);
```

### Answer:

**Output:** `20`

### Question 22: What will be the output?

```js
let x = [1, 2, 3, 4];
let [a, ...b] = x.reverse();
console.log(b);
```

### Answer:

**Output:** `[3,2,1]`

### Question 23: What will be the output?

```js
let x = 0;
let y = "0";
console.log(false == x);
console.log(false == y);
```

### Answer:

**Output:** `true true`

### Question 24: What will be the output?

```js
const a = [1, 2, 3];
const b = [...a];
b.push(4);
console.log(a);
```

### Answer:

**Output:** `[ 1, 2, 3 ]`

### Question 25: What will be the output?

```js
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```

### Answer:

**Output:** `3 3 3` if iteration was let then ` 0 1 2`

### Question 26: What will be the output?

```js
var a = 10;
(function () {
  console.log(a);
  var a = 5;
})();
```

### Answer:

**Output:** `undefined`

### Question 27: What will be the output?

```js
var x = 5;
(function () {
  console.log(x);
})();
```

### Answer:

**Output:** `5`

### Question 28: What will be the output?

```js
let lang = "js";
(function () {
  let lang = "java";
})();
console.log(lang);
```

### Answer:

**Output:** `js`

### Question 29: What will be the output?

```js
console.log(typeof NaN);
console.log(typeof typeof 1);
```

### Answer:

**Output:** `number  string`

### Question 30: What will be the output?

```js
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Sam";
  let age = 29;
}
sayHi();
```

### Answer:

**Output:** `undefined   Refference error`

### Question 31: What will be the output?

```js
[...'Sam'] or 'Sam'.split('');
```

### Answer:

**Output:** `["S","a","m"]`

### Question 32: What will be the output?

```js
function getAge(...args) {
  console.log(typeof args);
}
getAge(21);
```

### Answer:

**Output:** `object`

### Question 33: What will be the output?

```js
const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);
obj.hasOwnProperty("1");
obj.hasOwnProperty(1);
set.has("1");
set.has(1);
```

### Answer:

**Output:** `true  true  false  true`

### Question 34: What will be the output?

```js
[1, 2, 3].map((num) => {
  if (typeof num === "number") return;
  return num * 2;
});
```

### Answer:

**Output:** `[undefined, undefined, undefined]`

### Question 35: What will be the output?

```js
let obj = {
  x: 2,
  getX: function () {
    let x = 4;
    console.log(this.x);
  },
};
obj.getX();
```

### Answer:

**Output:** `2`

### Question 36: What will be the output?

```js
var x = 5;
function test() {
  console.log(x);
  var x = 10;
}
test();
```

### Answer:

**Output:** `5`

### Question 37: What will be the output?

```js
let a = { x: 1, y: 2 };
let b = a;
b.x = 3;
console.log(a);
console.log(b);
```

### Answer:

**Output:** `both { x: 3, y: 2 }`

### Question 38: What will be the output?

```js
console.log({} == {}); //false
console.log({} === {}); //false
```

### Answer:

**Output:** `false  false`

### Question 39: What will be the output?

```js
const arr = [2, 3, 5, 2, 8, 10, 5];
console.log(arr.indexOf(5));
```

### Answer:

**Output:** `2`

### Question 40: What will be the output?

```js
function checkValue(value) {
  var result = Array.isArray(value);
  console.log(result);
}
checkValue([1, 2, 3]);
```

### Answer:

**Output:** `true`

### Question 41: What will be the output?

```js
const a = { x: 1 };
const b = { x: 1 };
console.log(a === b);
console.log(a.x === b.x);
```

### Answer:

**Output:** ` false  true`

### Question 42: What will be the output?

```js
const person = {
  firstName: "Sam",
};
const { firstName = "Rupai" } = person;
console.log(firstName);
const { lastName = "Muk" } = person;
console.log(lastName);
```

### Answer:

**Output:** ` Sam  Muk`

### Question 43: What will be the output?

```js
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};
console.log(shape.diameter());
console.log(shape.perimeter());
```

### Answer:

**Output:** `20  NaN`

### Question 44: What will be the output?

```js
function bark() {
  console.log("Woof!");
}
bark.animal = "dog";
```

### Answer:

**Output:** `dog`

### Question 45: What will be the output?

```js
function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}
const person = "Sam";
const age = 29;
getPersonInfo`${person} is ${age} years old`;
```

### Answer:

**Output:** `["", " is ", " years old"] "Sam" 29`

### Question 46: What will be the output?

```js
const sum = eval("10*10+5");
const num = parseInt("7*6", 10);
```

### Answer:

**Output:** `105   7`

### Question 47: What will be the output?

```js
const a = {};
const b = { key: "b" };
const c = { key: "c" };
a[b] = 123;
a[c] = 456;
console.log(a[b]);
```

### Answer:

**Output:** `456`

### Question 48: What will be the output?

```js
<div onclick="console.log('div')">
  <p onclick="console.log('p')">Click here!</p>
</div>
```

### Answer:

**Output:** `p  div`

### Question 49: What will be the output?

```js
[
  [0, 1],
  [2, 3],
].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2]
);
```

### Answer:

**Output:** `[1, 2, 0, 1, 2, 3]`

### Question 50: What will be the output?

```js
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
```

### Answer:

**Output:** `1 2 and undefined 3 and undefined 4`

### Question 51: What will be the output?

```js
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});
const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});
Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));
```

### Answer:

**Output:** `two`

### Question 52: What will be the output?

```js
class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function () {
  console.log(`Woof I am ${this.name}`);
};
const pet = new Dog("Mara");
pet.bark();
delete Dog.prototype.bark;
pet.bark();
```

### Answer:

**Output:** `"Woof I am Mara"      TypeError`

### Question 53: What will be the output?

```js
const set = new Set([1, 1, 2, 3, 4]);
console.log(set);
```

### Answer:

**Output:** `{1, 2, 3, 4}`

### Question 54: What will be the output?

```js
const name = "Lydia";
age = 21;
console.log(delete name); //false
console.log(delete age); //true
```

### Answer:

**Output:** `false   true`

### Question 55: What will be the output?

```js
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;
console.log(y);
```

### Answer:

**Output:** `1`

### Question 56: What will be the output?

```js
const value = { number: 10 };
const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};
multiply(); //20
multiply(); //20
multiply(value); //20
multiply(value); //40
```

### Answer:

**Output:** `20  20  20  40`

### Question 57: What will be the output?

```js
console.log(Number(2) === Number(2));
console.log(Boolean(false) === Boolean(false));
console.log(Symbol("foo") === Symbol("foo"));
```

### Answer:

**Output:** `true  true  false`

### Question 58: What will be the output?

```js
async function getData() {
  return await Promise.resolve("I made it!");
}
const data = getData();
console.log(data);
```

### Answer:

**Output:** `Promise {<pending>}`

### Question 59: What will be the output?

```js
fetch("https://www.website.com/api/user/1")
  .then((res) => res.json())
  .then((res) => console.log(res));
```

### Answer:

**Output:** `The result of the callback in the previous .then()`

### Question 60: What will be the output?

```js
const person = {
  name: "Sam",
  age: 29,
};
for (const [x, y] of Object.entries(person)) {
  console.log(x, y);
}
```

### Answer:

**Output:** `name Sam and age 29`

### Question 61: What will be the output?

```js
function sumValues(x, y, z) {
  return x + y + z;
}
sumValues(...[1, 2, 3]);
```

### Answer:

**Output:** `6`

### Question 62: What will be the output?

```js
function compareMembers(person1, person2 = person) {
  if (person1 !== person2) {
    console.log("Not the same!");
  } else {
    console.log("They are the same!");
  }
}
const person = { name: "Sam" };
compareMembers(person);
```

### Answer:

**Output:** `They are the same!`

### Question 63: What will be the output?

```js
function* generatorOne() {
  yield ["a", "b", "c"];
}
function* generatorTwo() {
  yield* ["a", "b", "c"];
}
const one = generatorOne();
const two = generatorTwo();
console.log(one.next().value);
console.log(two.next().value);
```

### Answer:

**Output:** `['a', 'b', 'c']  a `

### Question 64: What will be the output?

```js
var output = (function (x) {
  return x;
})(0);
```

### Answer:

**Output:** `0 `

### Question 65: What will be the output?

```js
(function () {
  var objA = {
    foo: "foo",
    bar: "bar",
  };
  var objB = {
    foo: "foo",
    bar: "bar",
  };
  console.log(objA == objB);
  console.log(objA === objB);
})();
```

### Answer:

**Output:** `false  false`

### Question 66: What will be the output?

```js
var fruit = ["mango", "banana", "apple", "melon", "cherry"];
delete fruit[3];
```

### Answer:

**Output:** `["mango", "banana", "apple", empty, "cherry"]`

### Question 67: What will be the output?

```js
function mul(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}

console.log(mul(2)(3)(4));
```

### Answer:

**Output:** `24`

### Question 68: What will be the output?

```js
let arr = [1, 2, 3, 4, 5];
arr["10"] = 30;
console.log(arr.length);
let arr2 = [1, 2, 3, 4, 5];
arr2["sam"] = 40;
console.log(arr2.length);
```

### Answer:

**Output:** `11 5`

### Question 69: What will be the output?

```js
let x = { a: 1, b: 2, c: [10, 20], d: 4 };
let y = JSON.parse(JSON.stringify(x));
y.c[1] = 30;
console.log(x, y, "deep copy");
```

### Answer:

**Output:** `only y updated with 30`

### Question 70: What will be the output?

```js
let x1 = { a: 1, b: 2, c: [10, 20], d: 4 };
let y1 = { ...x1 };
y1.c[1] = 30;
console.log(x1, y1, "shallow copy");
```

### Answer:

**Output:** `both x1 and y1 updated with 30`

### Question 71: What will be the output?

```js
const numbers = [1, 2, 3, 4, 5, 6];
const myReduce = numbers.reduce((acc, num) => {
  if (num % 2 === 0) acc.push(num * 2);
  return acc;
}, []);

const myMap = numbers.map((num) => {
  if (num % 2 === 0) return num * 2;
});

console.log(myReduce, myMap);
```

### Answer:

**Output:** `[4, 8, 12]  [ undefined, 4, undefined, 8, undefined, 12 ]  `

### Question 72: What will be the output?

```js
const numbers = [10, 20, 30, 40];

const obj = numbers.reduce((acc, num, index) => {
  acc[index] = num;
  return acc;
}, {});

console.log(obj);
```

### Answer:

**Output:** ` { '0': 10, '1': 20, '2': 30, '3': 40 }`

### Question 73: What will be the output?

```js
const users = [
  { name: "Alex", age: 13 },
  { name: "Bob", age: 50 },
];
for (const { name, age } of users) {
  console.log(name, age);
}
```

### Answer:

**Output:**

### Question 74: What will be the output?

```js
const users = [
  ["Alex", 13],
  ["Bob", 50],
];
for (const [name, age] of users) {
  console.log(name, age);
}
```

### Answer:

**Output:**

### Question 75: What will be the output?

```js
const users = {
  1: <h1>Alex</h1>,
  2: <h1>Bob</h1>,
};
{
  Object.keys(users).map((key) => <div key={key}>{users[key]}</div>);
}
```

### Answer:

**Output:**

### Question 75: What will be the output?

```js
const users = {
  user1: { name: "Alex", age: 13 },
  user2: { name: "Bob", age: 50 },
};
for (const { name, age } of Object.values(users)) {
  console.log(name, age);
}
```

### Question 76: What will be the output?

```js
function sum(a, b) {//(6,5)
    console.log(a + b);
  }
  function operation(val1, val2, callback) {//(6,5,sum())
    callback(val1, val2);
  }
  ->operation(6, 5, sum);
```

### Question 77: what will be the output?

```js
(function ask(question = "prompt", yes = alert, no = alert) {
  if (confirm(question)) yes("You agreed.");
  else no("You canceled the execution.");
})();
```

### Question 78: what will be the output?

```js
let x = [];
let y = [];
let z = x + y;
console.log(typeof z);
```

**Output:** string

### Question 79: what will be the output?

```js
console.log([1, 2] + [3, 4]);
console.log(1 + +2);
console.log(1 + +"2");
console.log("1" + +2);
console.log(1 + true);
```

**Output:** 1,23,4
3
3
12
2

### Question 80: what will be the output?

```js
function add(a, b) {
  return a + b; //first calculate and return 30+20
}
function higherOrder(a, addReference) {
  return addReference(a, 20); // second return 50
}
console.log(higherOrder(30, add)); //50
```
