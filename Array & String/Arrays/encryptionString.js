function encryption(s) {
  let column = Math.ceil(Math.sqrt(s.length));
  let output = "";

  for (let i = 0; i < column; i++) {
    for (let j = i; j < s.length; j += column) {
      output += s[j];
    }
    output += " ";
  }

  return output.trim();
}
