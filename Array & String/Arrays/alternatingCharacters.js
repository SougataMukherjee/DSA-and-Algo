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
