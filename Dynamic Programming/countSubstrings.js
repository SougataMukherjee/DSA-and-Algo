function countSubstrings(s) {
  let count = 0;
  function extendPalindrome(s, left, right) {
    //untill condition shift left pointer to left and right pointer to right and increase count by one
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    extendPalindrome(s, i, i); //count palindrome with odd length "abcba"
    extendPalindrome(s, i, i + 1); //count palindrome with even length "abba"
  }
  return count;
}
