class Solution {
  deleteNode(head, x) {
    // code here
    let del_node = head;
    let index = x - 1;

    // Traverse to the node to be deleted
    while (index > 0 && del_node !== null) {
      del_node = del_node.next;
      index--;
    }

    // Base case: if the node to be deleted is not found
    if (del_node === null) {
      return head;
    }

    // If the node to be deleted is the head node
    if (head === del_node) {
      head = del_node.next;
    }

    // Change next only if node to be deleted is not the last node
    if (del_node.next !== null) {
      del_node.next.prev = del_node.prev;
    }

    // Change prev only if node to be deleted is not the first node
    if (del_node.prev !== null) {
      del_node.prev.next = del_node.next;
    }

    // Return the updated head
    return head;
  }
}
