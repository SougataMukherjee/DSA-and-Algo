function rangeSum(arr, l, r) {
  for (let i = 1; i < arr.length; i++) {
    arr[i] += arr[i - 1];
  }
  // Adjust for 1-based indexing
  if (l === 1) {
    return arr[r - 1];
  }
  return arr[r - 1] - arr[l - 2];
}
console.log(rangeSum([2, 4, 1, 3, 6, 5], (l = 3), (r = 5)));
