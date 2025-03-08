const a = [
  ["name", "Joy"],
  ["age", 30],
  ["city", "New Delhi"],
];
const obj = Object.fromEntries(a);
console.log(obj); //{ name: 'Joy', age: 30, city: 'New Delhi' }
