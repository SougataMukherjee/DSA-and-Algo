function isPossible(s) {
  let freqMap = new Map();

  // Count frequency of each character
  for (let char of s) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  let oddCount = 0;

  // Check for characters with odd frequency
  for (let count of freqMap.values()) {
    if (count % 2 !== 0) {
      oddCount++;
    }
    if (oddCount > 1) return 0;
  }

  return 1;
}
