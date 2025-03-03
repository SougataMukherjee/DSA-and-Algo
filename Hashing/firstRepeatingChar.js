let firstRepeatingChar = function (s) {
  let mp = {};

  for (let a of s) {
    mp[a] = (mp[a] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (mp[s[i]] > 1) {
      // Change the condition here
      return i;
    }
  }

  return -1;
};
