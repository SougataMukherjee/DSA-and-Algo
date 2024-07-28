let arr = [1, 2, 2, 6, 6, 6, 6, 7, 10];
let n = arr.length;
const majority = Math.floor(n / 4);
for (let i = 0; i < n - majority; i++) {
  if (arr[i] === arr[i + majority]) {
    console.log(arr[i]);
  }
}
