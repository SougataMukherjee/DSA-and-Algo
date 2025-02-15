function append(head, newData) {
  // Create a new node
  const newNode = new Node(newData);

  // If the Linked List is empty,
  // make the new node as the head
  if (head === null) {
    return newNode;
  }

  // Store the head reference in a
  // temporary variable
  let last = head;

  // Traverse till the last node or while (last.next)
  while (last.next !== null) {
    last = last.next;
  }

  // Change the next pointer of the
  // last node to point to the new node
  last.next = newNode;

  // Return the head of the list
  return head;
}
