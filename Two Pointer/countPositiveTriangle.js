function countTriangles(arr) {
  let res = 0;
  arr.sort((a, b) => a - b);
  for (let i = 2; i < arr.length; ++i) {
    let left = 0,
      right = i - 1;
    while (left < right) {
      if (arr[left] + arr[right] > arr[i]) {
        res += right - left;
        right--;
      } else {
        left++;
      }
    }
  }

  return res;
}
