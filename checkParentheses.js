function checkParenthesis(str) {
  let stack = [];
  for (let c of str) {
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } else {
      if (
        !stack.length ||
        (c === ")" && stack[stack.length - 1] !== "(") ||
        (c === "}" && stack[stack.length - 1] !== "{") ||
        (c === "]" && stack[stack.length - 1] !== "[")
      ) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}

console.log(checkParenthesis("({})")); // true
console.log(checkParenthesis("({)")); //  false
