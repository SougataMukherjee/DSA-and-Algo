//Update each element in the array to its next smaller adjacent element; if none exists, set it to -1
// arr[] = [4, 2, 1, 5, 3]  O/P [2, 1, -1, 3, -1]

function immediateSmaller(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      arr[i] = arr[i + 1];
    } else {
      arr[i] = -1;
    }
  }
  arr[n - 1] = -1;
}
