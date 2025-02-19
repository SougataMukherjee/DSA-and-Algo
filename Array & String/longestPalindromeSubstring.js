function longestPalindrome(s) {
  let len = s.length;
  let start = 0;
  let max = 1;

  for (let i = 1; i < len; i++) {
    let low = i - 1;
    let high = i;

    while (low >= 0 && high < len && s[low] == s[high]) {
      if (high - low + 1 > max) {
        max = high - low + 1;
        start = low;
      }
      low--;
      high++;
    }

    low = i - 1;
    high = i + 1;

    while (low >= 0 && high < len && s[low] == s[high]) {
      if (high - low + 1 > max) {
        max = high - low + 1;
        start = low;
      }
      low--;
      high++;
    }
  }

  return s.substr(start, max);
}
