function subarraysDivByK(nums, k) {
  const n = nums.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    let prefixSum = 0;

    for (let j = i; j < n; j++) {
      prefixSum += nums[j];

      if (prefixSum % k === 0) count++;
    }
  }

  return count;
}
