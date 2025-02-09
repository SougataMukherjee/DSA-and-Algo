function deleteAtLast(head) {
  if (head === null) {
    console.error("List is already empty.");
    return null;
  }
  if (head.next === null) {
    // If only one node exists
    return null;
  }
  let temp = head;
  while (temp.next !== null && temp.next.next !== null) {
    temp = temp.next;
  }
  temp.next = null;
  return head;
}
