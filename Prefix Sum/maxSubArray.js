function maxSubArray(num = [-2, 1, -3, 4, -1, 2, 1, -5, 4]) {
  if (num.length === 0) return 0;
  if (num.length === 1) return num[0];
  let max = num[0];
  let sum = 0;

  for (let i of num) {
    sum += num[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}

// method 2
function maxSubArray(nums) {
  let sum = 0;
  let maxi = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum += nums[i];
    if (sum > maxi) maxi = sum;
    if (sum < 0) sum = 0;
    return maxi;
  }
}

//for largest subarray with 0 sum

let n = arr.length;
let maxLen = 0;

for (let i = 0; i < n; i++) {
  let currSum = 0;

  // Try all subarrays starting with 'i'
  for (let j = i; j < n; j++) {
    currSum += arr[j]; // Update sum

    // If currSum becomes 0, update maxLen
    if (currSum === 0) {
      maxLen = Math.max(maxLen, j - i + 1);
    }
  }
}

return maxLen;
