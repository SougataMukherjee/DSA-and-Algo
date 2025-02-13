function reverseStack(stack) {
  if (stack.length === 0) return;

  let top = stack.pop();
  reverseStack(stack);
  insertAtBottom(stack, top);
}

function insertAtBottom(stack, item) {
  if (stack.length === 0) {
    stack.push(item);
    return;
  }

  let top = stack.pop();
  insertAtBottom(stack, item);
  stack.push(top);
}

let stack = [1, 2, 3, 4];
reverseStack(stack);
console.log(stack); // Output: [4, 3, 2, 1]
