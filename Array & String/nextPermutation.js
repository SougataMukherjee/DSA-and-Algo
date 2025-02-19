function nextPermutation(nums) {
  const n = nums.length;
  let i = n - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) i--;
  if (i >= 0) {
    let j = n - 1;
    while (nums[j] <= nums[i]) j--;
    swap(nums, i, j);
  }
  reverse(nums, i + 1);
}
function swap(nums, i, j) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}

function reverse(nums, start) {
  let end = nums.length - 1;
  while (start < end) swap(nums, start++, end--);
}
