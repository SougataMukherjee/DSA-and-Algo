function ListNode(value = 0, next = null) {
  return {
    value: value,
    next: next,
  };
}

function mergeTwoLists(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  if (l1.value <= l2.value) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}

function print(head) {
  let result = [];
  while (head) {
    result.push(head.value);
    head = head.next;
  }
  console.log(result.join("->"));
}

const node1 = ListNode(1);
const node2 = ListNode(2);
const node4 = ListNode(4);

node1.next = node2;
node2.next = node4;

const node3 = ListNode(3);
const node5 = ListNode(5);
const node6 = ListNode(6);
node3.next = node5;
node5.next = node6;
const mergedList = mergeTwoLists(node1, node3);
print(mergedList);
