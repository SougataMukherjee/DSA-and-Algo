function insertInArray(arr, pos) {
  let n = arr.length;
  for (let i = n; i >= pos - 1; i--) {
    arr[i + 1] = arr[i];
    arr[pos - 1] = val;
  }
  for (let i = 0; i <= n; i++) console.log(arr[i]);
}
