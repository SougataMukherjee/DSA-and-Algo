function lengthOfLL(head) {
  let count = 0;
  while (head) {
    count++;
    head = head.next;
  }
  return count;
}
