function subarraySum(nums, k) {
  let subNum = { 0: 1 };
  let total = 0,
    count = 0;

  for (const n of nums) {
    total += n;

    if (subNum[total - k] !== undefined) {
      count += subNum[total - k];
    }

    subNum[total] = (subNum[total] || 0) + 1;
  }

  return count;
}
