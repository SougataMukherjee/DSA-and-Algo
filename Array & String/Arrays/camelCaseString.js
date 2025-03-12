//count number of words it contains Input: oneTwoThree Output: 3
function camelcase(s) {
  let count = 1;
  for (let char of s) {
    if (char >= "A" && char <= "Z") count++;
  }
  return count;
}
