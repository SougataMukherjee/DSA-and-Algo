let a = [1, 2, 3, 4, 6],
  b = [1, 2, 3],
  c = [2, 3, 5, 8];
let commonElements = a.filter(
  (element) => b.includes(element) && c.includes(element)
);

console.log(commonElements);
