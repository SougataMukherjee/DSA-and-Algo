function deleteMidStack(stack, count, pos) {
  // If we reach the middle position, remove the element
  if (count === pos) {
    stack.pop();
    return;
  }
  // Remove the top element and store it temporarily
  const top = stack.pop();
  // Process the next element
  deleteMidStack(stack, count + 1, pos);
  // Push the top element back
  stack.push(top);
}
deleteMidStack([1, 2, 3, 4, 5], 0, Math.ceil(stack.length / 2) - 1);
