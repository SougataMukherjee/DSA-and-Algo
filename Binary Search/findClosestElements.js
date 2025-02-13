function findClosestElements(arr, k, x) {
  let left = 0;
  let right = arr.length - k;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    //find in the window
    if (x - arr[mid] > arr[mid + k] - x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  let result = [];
  for (let i = left; i < left + k; i++) {
    result.push(arr[i]);
  }
  return result;
}
