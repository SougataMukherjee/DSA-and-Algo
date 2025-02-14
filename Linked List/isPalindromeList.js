function isPalindrome(head) {
  let slow = head;
  let stack = [];

  // Traverse the list and push all elements onto the stack
  while (slow !== null) {
    stack.push(slow.data);
    slow = slow.next;
  }

  // Traverse the list again and compare with the stack
  while (head !== null) {
    let topElement = stack.pop();

    if (head.data !== topElement) {
      return false;
    }

    head = head.next;
  }

  return true;
}
