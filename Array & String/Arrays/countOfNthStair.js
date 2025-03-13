//Note: Input: n = 4 Output: 3
// Explanation: Three ways to reach at 4th stair. They are {1, 1, 1, 1}, {1, 1, 2}, {2, 2}.
function nthStair(n) {
  return Math.floor(n / 2) + 1;
}
