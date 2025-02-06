function removeInvalidParentheses(s) {
  const stack = []; // To store indices of unmatched '('
  const toRemove = new Set(); // To store indices of invalid parentheses
  let result = "";

  // Step 1: Identify invalid parentheses
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      // Push the index of the opening bracket onto the stack
      stack.push(i);
    } else if (s[i] === ")") {
      if (stack.length > 0) {
        // Valid pair found; remove the index of the matching '('
        stack.pop();
      } else {
        // No matching opening bracket; mark this ')' as invalid
        toRemove.add(i);
      }
    }
  }

  // Add remaining unmatched '(' indices to the 'toRemove' set
  while (stack.length > 0) {
    toRemove.add(stack.pop());
  }

  // Step 2: Build the result string by excluding invalid parentheses
  for (let i = 0; i < s.length; i++) {
    if (!toRemove.has(i)) {
      result += s[i];
    }
  }

  return result;
}

console.log(removeInvalidParentheses("()())()")); // Output: "()()()"
