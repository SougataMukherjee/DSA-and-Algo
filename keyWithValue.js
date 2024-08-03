function keysWithValue(obj, value) {
  //let result = [];
  let result = {};
  for (let key in obj) {
    if (obj[key] === value) {
      //result.push(key);
      result[key] = obj[key];
    }
  }
  return result;
}
const obj = { a: 1, b: 2, c: 1 };
const value = 1;
console.log(keysWithValue(obj, value)); //  ['a', 'c']
