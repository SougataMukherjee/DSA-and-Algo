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
