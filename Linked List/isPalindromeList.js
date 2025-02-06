function isPalindrome(head) {
  let temp = head; //temp point to head
  let stack = [];

  // push the elements to the stack and move the temp value
  while (temp !== null) {
    stack.push(temp.val);
    temp = temp.next;
  }
  temp = head;
  // check temp with top elements of stack if its match temp value move
  while (temp !== null) {
    if (temp.val != stack.pop()) return false;
    temp = temp.next;
  }

  return true;
}
