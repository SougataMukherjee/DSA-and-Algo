function sortStack(stack) {
  const tempStack = [];

  while (stack.length > 0) {
    // Pop the top element from the original stack
    const current = stack.pop();

    // Move elements from tempStack back to stack if they are greater than current
    while (tempStack.length > 0 && tempStack[tempStack.length - 1] > current) {
      stack.push(tempStack.pop());
    }

    // Push the current element into tempStack
    tempStack.push(current);
  }

  // Move all elements back to the original stack
  while (tempStack.length > 0) {
    stack.push(tempStack.pop());
  }
}
