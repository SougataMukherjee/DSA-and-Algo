let a = { a: 20, b: 10 };
let b = { b: 10, a: 20 };
let c = { a: 20, b: 10 };

console.log(
  Object.entries(a).sort().toString() === Object.entries(b).sort().toString()
); //true
console.log(JSON.stringify(a) === JSON.stringify(c)); //true
