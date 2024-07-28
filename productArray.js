let arr = [1, 2, 3, 4];
let res = [];

let totalProduct = arr.reduce((acc, val) => acc * val, 1);

for (let i = 0; i < arr.length; i++) {
  res.push(totalProduct / arr[i]);
}

console.log(res);
