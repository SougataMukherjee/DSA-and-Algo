function countProperties(obj) {
  return Object.keys(obj).length;
}
const Obj = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(countProperties(Obj)); // 3
