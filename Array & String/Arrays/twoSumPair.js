function twoSum(arr, target) {
  let n = arr.length;

  // Iterate through each element in the array
  for (let i = 0; i < n; i++) {
    // For each element arr[i], check every
    // other element arr[j] that comes after it
    for (let j = i + 1; j < n; j++) {
      // Check if the sum of the current pair
      // equals the target
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  // If no pair is found after checking
  // all possibilities
  return false;
}
