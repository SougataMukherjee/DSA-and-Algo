function deleteMid(node) {
  if (!node || !node.next) return null; // If only one node, return null

  let slow = node;
  let fast = node;
  let prev = null; // To track the node before the middle

  while (fast !== null && fast.next !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  // Delete the middle node by skipping it
  prev.next = slow.next;

  return node;
}
