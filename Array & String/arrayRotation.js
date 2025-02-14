let arr = [1, 2, 0, 2, 1, 0],
  k = 3;
for (let i = 0; i < k; i++) {
  arr.unshift(arr.pop());
  console.log(`step${i + 1}`, arr);
}

//solution 2
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
