function findPrimePairs(n) {
  let res = [];
  for (let i = 1; i <= n / 2; i++) {
    if (isPrime(i) && isPrime(n - i)) {
      res.push([i, n - i]);
    }
  }
  return res;
}
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  if (number <= 3) {
    return true;
  }

  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  let i = 5;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }

  return true;
}
