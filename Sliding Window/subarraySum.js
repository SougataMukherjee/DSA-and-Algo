function subarraySum(arr, target) {
  let sum = 0;
  let l = 0;

  for (let r = 0; r < arr.length; r++) {
    sum += arr[r];

    while (sum > target) {
      sum -= arr[l++];
    }

    if (sum === target) {
      return [l + 1, r + 1];
    }
  }

  return [-1];
}
