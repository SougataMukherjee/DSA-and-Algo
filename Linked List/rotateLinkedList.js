function rotateRight(head, k) {
  if (!head || !head.next) return head;

  let tail = head;

  let length = 1;

  while (tail.next) {
    tail = tail.next;

    length++;
  }

  tail.next = head;

  k = length - (k % length); // mod k to length as k can be greater than length of list

  for (let i = 0; i < k; i++) {
    tail = tail.next;

    head = tail.next;
  }

  tail.next = null;

  return head;
}
