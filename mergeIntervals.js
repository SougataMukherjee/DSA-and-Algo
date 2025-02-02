function mergeIntervals(intervals) {
  // Sort intervals by their start time
  intervals.sort((a, b) => a[0] - b[0]);

  const res = []; // Result array to store merged intervals
  let prev = intervals[0]; // Initialize `prev` with the first interval

  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i]; // Current interval

    // Check if the current interval overlaps with the previous one
    if (current[0] <= prev[1]) {
      // Merge the intervals by updating the end of `prev` to the max end
      prev[1] = Math.max(prev[1], current[1]);
    } else {
      // No overlap: push the `prev` interval to the result and update `prev`
      res.push(prev);
      prev = current;
    }
  }

  // Push the last interval to the result
  res.push(prev);

  return res;
}
