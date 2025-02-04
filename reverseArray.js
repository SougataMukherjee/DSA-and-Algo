const arr = [2, 4, 7, 8, 9];
const n = arr.length;
for (let i = 0, j = n - 1; i < j; i++, j--) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
console.log(arr);
