function findPairs(nums, k) {
  if (k < 0 || nums.length === 0) return 0; // Edge case

  let map = new Map();
  let count = 0;

  // Populate the hashmap with frequencies
  for (let n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  for (let [n, freq] of map) {
    if (k === 0) {
      if (freq > 1) count++; // When k = 0, count pairs with duplicate elements
    } else if (map.has(n + k)) {
      count++; // When k > 0, check if the pair exists
    }
  }
  return count;
}
