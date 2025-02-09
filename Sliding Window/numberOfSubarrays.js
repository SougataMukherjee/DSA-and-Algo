function numberOfSubarrays(nums, k) {
  function atMost(nums, k) {
    let s = 0,
      ans = 0;
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
      s += nums[i] % 2;
      while (s > k) {
        s -= nums[j++] % 2;
      }
      ans += i - j + 1;
    }
    return ans;
  }

  return atMost(nums, k) - atMost(nums, k - 1);
}
