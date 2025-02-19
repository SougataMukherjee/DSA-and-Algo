function firstRepeated(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] == arr[j]) {
        return i + 1;
      }
    }
  }
  return -1;
}
