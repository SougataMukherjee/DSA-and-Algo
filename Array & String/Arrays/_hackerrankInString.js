function hackerrankInString(s) {
  let index = 0;
  let target = "hackerrank";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === target[index]) {
      index++;
    }
    if (index === target.length) {
      return "YES";
    }
  }
  return "NO";
}
