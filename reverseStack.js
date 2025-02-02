class Solution {
  reverse(St) {
    if (St.length === 0) return;

    // Remove the top element
    const top = St.pop();

    // Reverse the remaining stack
    this.reverse(St);

    // Insert the top element at the bottom
    this.insertAtBottom(St, top);
  }

  insertAtBottom(stack, item) {
    if (stack.length === 0) {
      stack.push(item);
      return;
    }

    // Remove the top element
    const top = stack.pop();

    // Recursive call to reach the bottom
    this.insertAtBottom(stack, item);

    // Push the removed element back
    stack.push(top);
  }
}
