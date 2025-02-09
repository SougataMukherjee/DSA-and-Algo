function minAddToMakeValid(s) {
  let stack = [];
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === "(") {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        count++;
      } else {
        stack.pop();
      }
    }
  }

  return count + stack.length;
}
