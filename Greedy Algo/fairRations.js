function fairRations(B) {
  // Write your code here
  let res = 0;

  for (let i = 0; i < B.length - 1; i++) {
    if (B[i] % 2 === 1) {
      B[i + 1]++;
      res += 2;
    }
  }

  return B[B.length - 1] % 2 === 0 ? res.toString() : "NO";
}
