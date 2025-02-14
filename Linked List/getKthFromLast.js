function getKthFromLast(head, k) {
  let slow = head,
    fast = head;

  // Move fast pointer k steps ahead
  for (let i = 0; i < k; i++) {
    if (fast === null) return -1; // k is greater than the number of nodes
    fast = fast.next;
  }

  // Move both pointers until fast reaches the end
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // Return the data of the node that slow is pointing to (kth from the end)
  return slow.data;
}
