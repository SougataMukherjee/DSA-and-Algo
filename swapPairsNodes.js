function swapPairs(head) {
  if (!head || !head.next) return head;
  let prev = head;
  let curr = head.next;
  let nxt = curr.next;
  curr.next = prev;
  prev.next = swapPairs(nxt);

  return curr;
}
