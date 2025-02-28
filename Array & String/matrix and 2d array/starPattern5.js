for (let i = 5, space = 0; i > 0; i -= 2, space++) {
  let row = "";
  for (let j = 0; j < space; j++) {
    row += " "; // Add spaces before stars
  }
  for (let j = 0; j < i; j++) {
    row += "*"; // Add stars
  }
  console.log(row);
}
