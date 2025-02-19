function minimumStep(n) {
  let ans = 0;
  while (n > 1) {
    if (n % 3 == 0) {
      ans++;
      n /= 3;
    } else {
      n--;
      ans++;
    }
  }
  return ans;
}
