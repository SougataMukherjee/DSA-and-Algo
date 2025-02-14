function longestSubarray(arr, k) {
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    // Sum of subarray from i to j
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];

      // If subarray sum is equal to k
      if (sum === k) {
        // find subarray length and update result
        let subLen = j - i + 1;
        res = Math.max(res, subLen);
      }
    }
  }

  return res;
}
