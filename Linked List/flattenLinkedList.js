class Solution {
  merge(head1, head2) {
    // A dummy first node to store the result list
    let dummy = new Node(-1);

    // Tail points to the last result node to add new nodes to the result
    let tail = dummy;

    // Iterate till either head1 or head2 does not reach null
    while (head1 !== null && head2 !== null) {
      if (head1.data <= head2.data) {
        // Append head1 to the result
        tail.bottom = head1;
        head1 = head1.bottom;
      } else {
        // Append head2 to the result
        tail.bottom = head2;
        head2 = head2.bottom;
      }

      // Move tail pointer to the next node
      tail = tail.bottom;
    }

    // Append the remaining nodes of non-null linked list
    if (head1 === null) tail.bottom = head2;
    else tail.bottom = head1;

    return dummy.bottom;
  }

  // Function to flatten the linked list
  flatten(root) {
    // Base Cases
    if (root === null || root.next === null) {
      return root;
    }

    // Recur for next list
    root.next = this.flatten(root.next);

    // Now merge the current and next list
    root = this.merge(root, root.next);

    // Return the root
    return root;
  }
}
