//Check if a given string contains "hackerrank" as a subsequence while maintaining character order.
//For each query, print "YES" if the string contains "hackerrank," otherwise print "NO".
//I/P hereiamstackerrank O/P yes
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
