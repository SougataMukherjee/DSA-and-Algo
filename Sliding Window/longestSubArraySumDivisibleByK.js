function longestSubarrayDivK(arr, k) {
  let res = 0;
  let sum = 0;
  let remainderMap = new Map();
  remainderMap.set(0, -1); // Initialize to handle cases where sum itself is divisible by k

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    let remainder = ((sum % k) + k) % k; // Handle negative remainders

    if (remainderMap.has(remainder)) {
      res = Math.max(res, i - remainderMap.get(remainder));
    } else {
      remainderMap.set(remainder, i);
    }
  }

  return res;
}
