let arr = [2, 5, 1, 3, 4, 7];
const n = arr.length / 2;
const res = [];
for (let i = 0; i < n; i++) {
  res.push(arr[i]);
  res.push(arr[i + n]);
}
console.log(res);
