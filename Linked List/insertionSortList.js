function insertionSortList(head) {
  if (!head || !head.next) return head;
  let dummy = new ListNode(0);
  let curr = head;
  while (curr) {
    let prev = dummy;
    let next = curr.next;

    // Find correct position to insert curr in sorted part
    while (prev.next && prev.next.val < curr.val) {
      prev = prev.next;
    }

    // Insert curr into sorted list
    curr.next = prev.next;
    prev.next = curr;

    // Move to next node
    curr = next;
  }

  return dummy.next;
}
