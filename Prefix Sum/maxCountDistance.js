function maxCount(banned, n, maxSum) {
  let arr = new Array(100).fill(0);
  for (let num of banned) {
    arr[num] = 1;
  }

  let sum = 0,
    count = 0;
  for (let i = 1; i <= n; i++) {
    if (arr[i] === 1) continue;
    sum += i;
    if (sum > maxSum) break;
    count++;
  }

  return count;
}
