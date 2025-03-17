function findNextEvents(events, n) {
  let result = new Array(n);

  for (let i = 0; i < n; i++) {
    let nextIndex = -1;
    let minStart = Infinity;

    for (let j = 0; j < n; j++) {
      if (events[j][0] >= events[i][1]) {
        // Check if start_j >= end_i
        if (events[j][0] < minStart) {
          // Find the earliest start time
          minStart = events[j][0];
          nextIndex = j;
        }
      }
    }

    result[i] = nextIndex;
  }

  return result;
}
