let a = [1, 2, 3, 4, 6],
  b = [1, 2, 3],
  c = [2, 3, 5, 8];
let commonElements = a.filter(
  (element) => b.includes(element) && c.includes(element)
);

console.log(commonElements);

//check array is subset of another array
let a1 = [1, 2, 3, 4, 6],
  b1 = [1, 2, 3];
console.log(b1.every((val) => a1.includes(val)));
