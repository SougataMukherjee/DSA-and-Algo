//Note:In a rotated sorted array, there is always at least one sorted subarray, and it might consist of two sorted subarrays if the rotation splits the array into two parts.
//NoteIf a[mid] < a[end], then the last half is a sorted array

function findMin(nums) {
  let left = 0,
    right = nums.length - 1;
  //until we have search space
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2); //(left+right)/2 is not good practice

    if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return nums[left];
}
