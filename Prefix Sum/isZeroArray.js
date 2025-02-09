function isZeroArray(nums, queries) {
  const freq = new Array(nums.length + 1).fill(0);

  for (let [l, r] of queries) {
    // Apply range increments
    freq[l]++;
    freq[r + 1]--;
  }

  let ops = 0; //  Apply prefix sum
  for (let i = 0; i < nums.length; i++) {
    if ((ops += freq[i]) < nums[i]) {
      return false;
    }
  }
  return true;
}
