function onesComplement(s, n) {
  let ans = "";
  for (let i = 0; i < n; i++) {
    if (s[i] === "0") ans = ans + "1";
    else ans = ans + "0";
  }
  return ans;
}
