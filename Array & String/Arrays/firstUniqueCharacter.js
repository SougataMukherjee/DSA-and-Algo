let firstUniqChar = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
      return i; // Print the index of the first unique character
    }
  }
  return -1;
};
console.log(firstUniqChar("leetcode"));
