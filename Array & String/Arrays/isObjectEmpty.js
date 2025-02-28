function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
const emptyObject = {};
const nonEmptyObject = { key: "value" };
console.log(isEmpty(emptyObject)); // true
console.log(isEmpty(nonEmptyObject)); // false
