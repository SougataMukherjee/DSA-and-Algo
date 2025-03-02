function wordPattern(pattern, s) {
  let hash = new Map();
  let arr = s.split(" ");

  if (pattern.length !== arr.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    let c = pattern[i];
    let word = arr[i];

    if (hash.has(c)) {
      if (hash.get(c) !== word) {
        return false;
      }
    } else {
      if ([...hash.values()].includes(word)) {
        return false;
      }
      hash.set(c, word);
    }
  }
  return true;
}
