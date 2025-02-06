function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function sortZeroesAndOnes(arr) {
  // From left to right, check if left is 1 and right is 0, then swap; else adjust pointers
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    if (arr[left] === 1 && arr[right] === 0) {
      swap(arr, left, right);
      left++;
      right--;
    }
    if (arr[left] === 0) {
      left++;
    }
    if (arr[right] === 1) {
      right--;
    }
  }
  return arr;
}
