function arrayToObject(arr) {
  const result = {};
  arr.forEach((obj) => {
    result[obj.id] = obj.value;
  });
  return result;
}
const arr = [
  { id: 1, value: 10 },
  { id: 2, value: 20 },
  { id: 3, value: 30 },
];

console.log(arrayToObject(arr)); // {1: 10, 2: 20, 3: 30}
