function findPeakElement(nums) {
  let start = 0,
    end = nums.length - 1;

  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);

    // Compare the middle element with its right neighbor
    if (nums[mid] < nums[mid + 1]) {
      // Peak must be in the right half
      start = mid + 1;
    } else {
      // Peak must be in the left half (including mid)
      end = mid;
    }
  }
  return start;
}
