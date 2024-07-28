let a = [1, 2, 3, 4, 6],
  b = [1, 2, 3],
  c = [2, 3, 5, 8];
let commonElements = a.filter(
  (element) => b.includes(element) && c.includes(element)
);

console.log(commonElements);

//check array is subset of another array
b.every((val) => a.includes(val));

//get all subset of an array
[1, 2, 3].reduce(
  (acc, val) => acc.concat(acc.map((set) => [...set, val])),
  [[]]
);
