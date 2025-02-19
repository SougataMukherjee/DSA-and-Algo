function mergeOverlap(intervals) {
  if (!intervals.length) return [];

  // Sort intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);

  let merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let prev = merged[merged.length - 1];
    let curr = intervals[i];

    // If intervals overlap, merge them
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      merged.push(curr);
    }
  }

  return merged;
}
