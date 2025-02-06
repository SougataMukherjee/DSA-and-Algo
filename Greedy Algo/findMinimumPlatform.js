//Explanation: There are at-most three trains at a time (time between 9:40 to 12:00)
function findPlatform(arr, dep, n) {
  // Sort both arrival and departure arrays
  arr.sort((a, b) => a - b);
  dep.sort((a, b) => a - b);

  let plat_needed = 0; // Platforms needed at the moment
  let result = 0; // Maximum platforms needed at any time
  let i = 0,
    j = 0;

  // Traverse both arrays
  while (i < n && j < n) {
    // If a train arrives before the previous one departs
    if (arr[i] <= dep[j]) {
      plat_needed++; // Increment platform count
      i++;
    } else {
      // If a train departs
      plat_needed--; // Decrement platform count
      j++;
    }

    // Update the result if needed
    result = Math.max(result, plat_needed);
  }

  return result;
}
