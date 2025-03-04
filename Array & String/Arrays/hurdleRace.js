function hurdleRace(k, height) {
  let max = height[0];
  for (let i = 1; i < height.length; i++) {
    if (max < height[i]) {
      max = height[i];
    }
  }
  if (max > k) {
    return max - k;
  }
  return 0;
}
