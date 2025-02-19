function countNodesinLoop(head) {
  let fast = head.next;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    // If slow and fast meet at some point, then there is a loop
    if (slow === fast) {
      let size = 1;
      fast = fast.next;
      while (fast !== slow) {
        fast = fast.next;
        size++;
      }
      return size;
    }
  }

  // If we reach here, then there is no loop
  return 0;
}
