function search(nums, target) {
  let start = 0,
    end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return true;
    }
    //check if start,mid and end are equal
    if (nums[mid] === nums[start]) {
      start++;
      continue;
    } else if (nums[start] <= nums[mid]) {
      // Left side is sorted
      if (nums[start] <= target && target <= nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      // Right side is sorted
      if (nums[mid] <= target && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return false;
}
