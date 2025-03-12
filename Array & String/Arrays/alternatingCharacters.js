//NOTE:counts the number of deletions required to make the string alternate without any adjacent duplicate characters
//I/P:"AABAAB" O/P: 2
//I/P:""AAAA"" O/P: 3
function alternatingCharacters(s) {
  let d = 0;
  let arr = s.split("");

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      d++;
    }
  }

  return d;
}
