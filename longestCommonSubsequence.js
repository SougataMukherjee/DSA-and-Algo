function lcs(text1, text2, m = text1.length, n = text2.length) {
  if (m === 0 || n === 0) return 0;
  if (text1[m - 1] === text2[n - 1]) return 1 + lcs(text1, text2, m - 1, n - 1);
  else
    return Math.max(lcs(text1, text2, m, n - 1), lcs(text1, text2, m - 1, n));
}
