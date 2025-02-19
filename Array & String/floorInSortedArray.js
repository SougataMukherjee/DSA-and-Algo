function findFloor(arr, k) {
  let i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > k) break;
  }
  return i - 1;
}
