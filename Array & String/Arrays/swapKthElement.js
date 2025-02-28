function swapKth(arr, k) {
  let n = arr.length;
  [arr[k - 1], arr[n - k]] = [arr[n - k], arr[k - 1]];
}
