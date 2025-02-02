function maxArea(height) {
  let maxArea = 0,
    left = 0,
    right = height.length - 1;

  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, width * minHeight);

    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}
