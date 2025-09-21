function longestContiguousSubarray(a) {
  let maxLength = 0;

  for (let i = 0; i < a.length; i++) {
    let count1 = 0,
      count2 = 0;

    for (let j = 0; j < a.length; j++) {
      if (a[j] === a[i]) count1++; // Count occurrences of a[i]
      if (a[j] === a[i] - 1) count2++; // Count occurrences of a[i] - 1
    }

    maxLength = Math.max(maxLength, count1 + count2);
  }

  return maxLength;
}
