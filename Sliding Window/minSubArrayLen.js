function minSubArrayLen(target, nums) {
  let ans = Infinity;
  let sum = 0;
  let l = 0; // Left pointer

  for (let r = 0; r < nums.length; r++) {
    sum += nums[r];

    // move the window when sum >= target
    while (sum >= target) {
      ans = Math.min(ans, r - l + 1);
      sum -= nums[l++];
    }
  }

  return ans === Infinity ? 0 : ans;
}
