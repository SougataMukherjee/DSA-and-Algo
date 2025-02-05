function isSquareRoot(num) {
  let res = 1;
  while (res * res <= num) {
    res++;
  }

  return res - 1;
}
