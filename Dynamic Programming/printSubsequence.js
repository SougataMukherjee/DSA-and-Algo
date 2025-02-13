function printSubsequence(input, output = "") {
  if (input.length === 0) {
    console.log(output);
    return;
  }

  // Include the first character
  printSubsequence(input.substring(1), output + input[0]);

  // Exclude the first character
  printSubsequence(input.substring(1), output);
}
