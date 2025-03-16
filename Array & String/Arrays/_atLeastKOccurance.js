function firstElementKTime(arr, k) {
  let n = arr.length;

  // Create a map to store the frequency of each element
  let mp = new Map();

  // Iterate over each element in the array
  for (let i = 0; i < n; i++) {
    // Update the count of the current element in the map
    mp.set(arr[i], (mp.get(arr[i]) || 0) + 1);

    // Check if the current element's frequency equals 'k'
    if (mp.get(arr[i]) === k) {
      // If found, return the element as it is the first to reach 'k'
      // occurrences
      return arr[i];
    }
  }

  // If no element occurs 'k' times, return -1
  return -1;
}
