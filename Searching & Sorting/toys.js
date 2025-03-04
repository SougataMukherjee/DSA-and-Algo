function toys(w) {
  let count = 1;
  w.sort((a, b) => a - b);
  let curr = w[0];

  for (let i of w) {
    if (Math.abs(i - curr) > 4) {
      count++;
      curr = i;
    }
  }

  return count;
}
