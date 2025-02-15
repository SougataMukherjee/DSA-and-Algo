function findKRotation(arr) {
  let n = arr.length;
  let k = 0;

  for (let i = 1; i < n; i++) {
    if (arr[i] < arr[i - 1]) {
      k = i;
      break;
    }
  }

  return k;
}
