function numRollsToTarget(n, k, target) {
  if (n === 0 && target === 0) return 1;

  // Base case: Invalid combination
  if (n === 0 || target < 0) return 0;

  let ans = 0;

  // Try all face values from 1 to k
  for (let i = 1; i <= k; i++) {
    ans += numRollsToTarget(n - 1, k, target - i);
  }

  return ans;
}
