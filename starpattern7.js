for (let i = 0, space = 2; i < 3; i++, space--) {
  let row = "";

  for (let j = 1; j <= i + 1; j++) {
    //  row += "*";
    row += j;
  }
  for (let j = 0; j < space; j++) {
    row += " ";
  }
  for (let j = 0; j < space; j++) {
    row += " ";
  }
  for (let j = 0; j < i + 1; j++) {
    //  row += "*";
    row += i + 1;
  }
  console.log(row);
}
