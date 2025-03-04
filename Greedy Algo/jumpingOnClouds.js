function jumpingOnClouds(c) {
  let result = 0;
  for (let i = 1; i < c.length; i++) {
    if (i + 1 < c.length && c[i + 1] !== 1) {
      result++;
      i++;
      continue;
    }
    if (c[i] !== 1) result++;
  }
  return result;
}
