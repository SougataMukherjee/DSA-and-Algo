function deleteDuplicates(head) {
  let temp = head;
  while (head && head.next) {
    if (head.next.val === head.val) {
      head.next = head.next.next;
    } else {
      head = head.next;
    }
  }
  return temp;
}
