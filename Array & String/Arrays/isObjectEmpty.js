function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
const emptyObject = {};
const nonEmptyObject = { key: "value" };
console.log(isEmpty(emptyObject)); // true
console.log(isEmpty(nonEmptyObject)); // false

//solution 2
let isEmpty = function (obj) {
  for (let key in obj) return false;
  return true;
};
