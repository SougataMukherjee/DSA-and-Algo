//Given an integer array nums, determine if it is non-decreasing after some rotation.
//In other words, check whether the array is sorted in non-decreasing order or can be rotated (cyclically shifted) to become sorted.
//Return true if it can, otherwise return false
//Input: nums = [3,4,5,1,2]
//Output: true
//Input: nums = [2,1,3,4]
//Output: false

function check(nums) {
  let count = 0,
    n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] > nums[(i + 1) % n]) count++;
    if (count > 1) return false;
  }

  return true;
}
