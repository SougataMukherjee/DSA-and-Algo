function commonFactors(a, b) {
  let count = 0;
  let limit = a < b ? a : b;

  for (let i = 1; i <= limit; i++) {
    if (a % i == 0 && b % i == 0) {
      count++;
    }
  }
  return count;
}
