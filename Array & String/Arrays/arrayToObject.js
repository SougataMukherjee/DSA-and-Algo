function arrayToObject(arr) {
  return { ...arr };
}
function arrayToObjects(arr) {
  const [one, two, three] = arr;
  const obj = { one, two, three };
  return obj;
}
const arr = [10, 20, 30];

console.log(arrayToObject(arr)); // {1: 10, 2: 20, 3: 30}
console.log(arrayToObjects(arr)); // {one: 10, two: 20, three: 30}

let a = [
  ["name", "Sam"],
  ["age", 30],
];
let obj = Object.fromEntries(a);
console.log(obj); //{name: 'Sam', age: 30}
