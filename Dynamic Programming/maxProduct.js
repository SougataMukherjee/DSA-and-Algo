function maxProduct(nums) {
  let res = Math.max(...nums);
  let curMax = 1,
    curMin = 1;

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];

    // previous current max store in temp
    let temp = curMax * n;

    // Update curMax and curMin
    curMax = Math.max(temp, curMin * n, n);
    curMin = Math.min(temp, curMin * n, n);

    // Update result
    res = Math.max(res, curMax);
  }

  return res;
}
