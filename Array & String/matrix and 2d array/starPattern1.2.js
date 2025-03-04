function staircase(n) {
  let string = "";
  for (let j = n; j > 0; j--) {
    for (let i = 1; i <= n; i++) {
      if (i < j) {
        string += " ";
        continue;
      }
      string += "#";
    }
    if (j === 1) {
      continue;
    }
    string += "\n";
  }
  console.log(string);
}
