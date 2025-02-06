function ListNode(value = 0, next = null) {
  return {
    value: value,
    next: next,
  };
}

function deleteNode(node) {
  if (node === null) {
    return;
  }
  if (node.next !== null) {
    //delete every node except last node
    node.value = node.next.value; // copy the next node's value
    node.next = node.next.next; // skip the next node
  } else {
    //delete last node
    node.value = null;
    node.next = null;
    return node;
  }
}

function printList(head) {
  let result = [];
  while (head) {
    result.push(head.value);
    head = head.next;
    console.log(head);
  }
  console.log(result.join("->"));
}
//create and link node
const node1 = ListNode(1);
const node2 = ListNode(2);
const node3 = ListNode(3);
const node4 = ListNode(4);
const node5 = ListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

deleteNode(node5);

printList(node1);
