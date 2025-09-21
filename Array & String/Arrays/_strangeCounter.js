function strangeCounter(t) {
  let last = 3,
    step = 3;
  while (t > last) {
    step *= 2;
    last += step;
  }
  return last - t + 1;
}
