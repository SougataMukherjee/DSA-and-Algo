function nthNode(head, n) {
  let slow = head,
    fast = head;
  //fast forward fast to those step
  for (let i = 1; i <= n; i++) {
    fast = fast.next;
  }
  //until fast got react to null move forward both pointer
  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}
