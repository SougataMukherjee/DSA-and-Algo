//Shallow Copy: Copies only the first-level properties of an object. Nested objects are not copied, but instead, their references are copied. Changes to nested objects in the original object will affect the shallow copy.
//Use when the object is simple and does not contain nested objects, or when you want the changes in the original object to be reflected in the copy.
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};
// Shallow copy using spread operator
const shallowCopy = { ...obj };
//Shallow copy using object assign
const shallowCopy2 = Object.assign({}, obj);
obj.b.c = 3;
console.log(obj, "+", shallowCopy, "+", shallowCopy2); //same output in 3 // { a: 1, b: { c: 3 } }
//Note:return (...args) =>shallow copy create using rest operator and new copy and return the args

//Deep Copy: Copies all levels of the object, including nested objects. Changes to the original object do not affect the deep copy.
//Use when the object is complex and contains nested objects, and you need to ensure that the copy is independent of the original object.
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};
// Deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(obj));
//Deep copy using structuredClone
const deepCopy2 = structuredClone(obj);

obj.b.c = 3;
console.log(obj); // { a: 1, b: { c: 3 } }
console.log(deepCopy, "+", deepCopy2); // { a: 1, b: { c: 2 } } - Deep copy remains unchanged
