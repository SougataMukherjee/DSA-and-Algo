function searchInLL(head, k) {
  let temp = head;
  while (temp !== null) {
    if (temp.data === k) {
      return true;
    }
    temp = temp.next;
  }
  return false;
}
