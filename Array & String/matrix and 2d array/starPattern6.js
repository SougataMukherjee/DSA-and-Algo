const rows = 3;

for (let i = 1; i <= rows; i++) {
  let row = "";
  for (let j = 0; j < rows - i; j++) {
    row += " ";
  }
  for (let j = 0; j < i; j++) {
    row += "*";
  }
  console.log(row);
}

for (let i = rows - 1; i >= 1; i--) {
  let row = "";
  for (let j = 0; j < rows - i; j++) {
    row += " ";
  }
  for (let j = 0; j < i; j++) {
    row += "*";
  }
  console.log(row);
}
