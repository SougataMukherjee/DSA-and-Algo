function reverseDLL(head) {
  if (head === null || head.next === null) {
    return head;
  }

  // Initialize pointers to track current and previous nodes
  let curr = head;
  let prev = null;

  // Loop until the current node is null
  while (curr !== null) {
    // Store the previous node
    prev = curr.prev;

    // Make the previous pointer of the current node point to the next node
    curr.prev = curr.next;

    // Make the next pointer of the current node point to the previous node
    curr.next = prev;

    // Move to the next node (which is actually the previous node due to
    // swapping)
    curr = curr.prev;
  }

  // Return the new head of the reversed list (prev points to the last node after
  // reversal)
  return prev.prev;
}
