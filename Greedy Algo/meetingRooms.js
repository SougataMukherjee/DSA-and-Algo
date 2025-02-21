A.sort((a, b) => a[0] - b[0]);

// Min heap to store end times
let minHeap = [];

for (let interval of A) {
  // Remove all intervals from heap that end before the current interval starts
  if (minHeap.length > 0 && minHeap[0] <= interval[0]) {
    minHeap.shift(); // Remove the earliest ending interval
  }

  // Insert the current interval's end time
  minHeap.push(interval[1]);

  // Maintain heap property (sort to keep the earliest ending interval at the front)
  minHeap.sort((a, b) => a - b);
}

return minHeap.length;
