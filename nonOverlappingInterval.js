//Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
function eraseOverlapIntervals(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let prev = intervals[0],
    remove = 0;

  for (let i = 1; i < intervals.length; i++) {
    // Check if the current interval overlaps with the previous one
    if (intervals[i][0] < prev[1]) remove++;
    // No overlap: update `prev` to the current interval
    else prev = intervals[i];
  }
  return remove;
}
