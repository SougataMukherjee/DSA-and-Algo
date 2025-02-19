function nonRepeatingChar(s) {
  let n = s.length;

  // Iterate over each character in the string
  for (let i = 0; i < n; ++i) {
    let found = false;

    // Check if the character repeats in the
    // rest of the string
    for (let j = 0; j < n; ++j) {
      if (i !== j && s[i] === s[j]) {
        found = true;
        break;
      }
    }

    // If character does not repeat, return it
    if (found === false) {
      return s[i];
    }
  }

  // If no such character is found, return '$'
  return "$";
}
