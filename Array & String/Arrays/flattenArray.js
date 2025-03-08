function flattenArray(arr) {
  return arr.flat(Infinity); //arr.flat(2)
}
const arr = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(arr));

//solution 2
let flat = function (arr, n, res = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && n) flat(arr[i], n - 1, res);
    else res.push(arr[i]);
  }

  return res;
};
