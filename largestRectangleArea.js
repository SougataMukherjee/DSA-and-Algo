function largestRectangleArea(heights) {
  let n = heights.length;
  let res = 0;

  // Consider every bar one by one
  for (let i = 0; i < n; i++) {
    let curr = heights[i];

    // Traverse left while we have a greater height bar
    let j = i - 1;
    while (j >= 0 && heights[j] >= heights[i]) {
      curr += heights[i];
      j--;
    }

    // Traverse right while we have a greater height bar
    j = i + 1;
    while (j < n && heights[j] >= heights[i]) {
      curr += heights[i];
      j++;
    }

    res = Math.max(res, curr);
  }

  return res;
}
