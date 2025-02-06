function removeDuplicates(s) {
  let ans = [];

  for (let i = 0; i < s.length; i++) {
    if (ans.length > 0 && s[i] === ans[ans.length - 1]) {
      ans.pop(); // Remove the last character
    } else {
      ans.push(s[i]); // Add the character to the result array
    }
  }

  return ans.join("");
}
