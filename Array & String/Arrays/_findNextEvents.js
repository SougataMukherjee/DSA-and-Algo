//You are given N events, each with a unique start time, represented as [start_i, end_i]. For each event i, find the next event j with the smallest start time such that start_j ≥ end_i; if no such event exists, return -1.
//events = [[start1, end1], [start2, end2], …] n = number of events
//Input: events = [[1,2],[2,3],[3,4]], n = 3
//Output: [1,2,-1]

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
