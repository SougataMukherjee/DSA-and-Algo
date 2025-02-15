function deleteNode(node) {
  if (node === null || node.next === null) {
    return;
  }
  // Copy data of the next node to the current node.
  node.data = node.next.data;
  // Update the next pointer of the current node to skip the next node.
  node.next = node.next.next;
}
