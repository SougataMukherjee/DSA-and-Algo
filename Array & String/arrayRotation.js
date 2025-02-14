function rotateArr(arr, d) {
  let n = arr.length;

  // Ensure d is within the range of array length
  d = d % n;

  // Slice and rearrange the array in place
  let temp = arr.slice(0, d);
  for (let i = 0; i < n - d; i++) {
    arr[i] = arr[i + d];
  }
  for (let i = 0; i < d; i++) {
    arr[n - d + i] = temp[i];
  }
}

//if rotate array by one
function rotate(arr) {
  let i = 0,
    j = arr.length - 1;
  while (i !== j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
  }
}
