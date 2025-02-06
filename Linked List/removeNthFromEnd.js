function removeNthFromEnd(head, n) {
  let slow = head,
    fast = head;
  //fast forward fast to those step
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  if (fast === null) {
    head = head.next;
    return head;
  }
  //until fast got react to null move forward both pointer
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;

  return head;
}
