function angryProfessor(k, a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) {
      count += 1;
    }
  }

  return count >= k ? "NO" : "YES";
}
