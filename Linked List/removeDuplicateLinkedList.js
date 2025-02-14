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

//solution 2
function removeDuplicates(head) {
  let seen = new Set(); // Track unique values
  let temp = head;
  let prev = null;
  while (temp !== null) {
    if (seen.has(temp.data)) {
      prev.next = temp.next;
    } else {
      // Add current node's data to the set and update 'prev'.
      seen.add(temp.data);
      prev = temp;
    }
    // Move to the next node.
    temp = temp.next;
  }
  return head;
}
